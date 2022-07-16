package org.anthaathi.graphqlengine.plugins.postgres

import graphql.language.*
import graphql.schema.idl.TypeDefinitionRegistry
import org.anthaathi.graphqlengine.plugins.core.interfaces.CorePlugin
import org.anthaathi.graphqlengine.plugins.core.interfaces.PluginKind
import org.apache.commons.text.CaseUtils

class PostgreSQLGraphqlEngine : CorePlugin {
    override val name = "postgres"
    override val kind: PluginKind = PluginKind.DATABASE
    override val idPrefix: String = "anthaathi://db/"

    override fun registry(schemaRegistry: TypeDefinitionRegistry): TypeDefinitionRegistry {
        val definitions = schemaRegistry.types()
        val typeDefinitionRegistry = TypeDefinitionRegistry()

        typeDefinitionRegistry.add(createNodeInterface())
        typeDefinitionRegistry.addAll(parseConnectionDirective(definitions.values.toMutableList()))
        typeDefinitionRegistry.addAll(createConnectionForQuery(definitions.values.toMutableList()))
        typeDefinitionRegistry.addAll(createInsertMutation(definitions.values.toMutableList()))

        return typeDefinitionRegistry
    }

    private fun createInsertMutation(types: MutableList<TypeDefinition<*>>): List<TypeDefinition<*>> {
        val definitions = mutableListOf<TypeDefinition<*>>()

        val objectTypeDefinitions = types.filterIsInstance<ObjectTypeDefinition>()
            .filter { it.hasDirective(name) }

        objectTypeDefinitions.forEach { objectTypeDefinition ->
            val inputValueDefinitions = mutableListOf<InputValueDefinition>()
            val mutationFieldDefinition = mutableListOf<FieldDefinition>()

            objectTypeDefinition.fieldDefinitions.forEach {
                val type = if (it.name == "id") unwrapNonNull(it.type) else it.type
                inputValueDefinitions.add(
                    InputValueDefinition.newInputValueDefinition()
                        .name(it.name.toString())
                        .type(type)
                        .build()
                )
            }

            objectTypeDefinitions.forEach {
                mutationFieldDefinition.add(
                    FieldDefinition.newFieldDefinition()
                        .name("create${ CaseUtils.toCamelCase(it.name, true) }")
                        .type(TypeName(it.name))
                        .inputValueDefinition(
                            InputValueDefinition.newInputValueDefinition()
                                .name("input")
                                .type(NonNullType.newNonNullType()
                                    .type(TypeName("Create${it.name}Input"))
                                    .build())
                                .build()
                        )
                        .build()
                )
            }

            definitions.add(
                InputObjectTypeDefinition.newInputObjectDefinition()
                    .name("Create${ CaseUtils.toCamelCase(objectTypeDefinition.name, true) }Input")
                    .inputValueDefinitions(inputValueDefinitions)
                    .build()
            )

            definitions.add(
                ObjectTypeDefinition.newObjectTypeDefinition()
                    .name("Mutation")
                    .fieldDefinitions(mutationFieldDefinition)
                    .build()
            )
        }

        return definitions
    }

    private fun createConnectionForQuery(types: MutableList<TypeDefinition<*>>): List<TypeDefinition<*>> {
        val definitions = mutableListOf<TypeDefinition<*>>()

        val items = types
            .filterIsInstance<ObjectTypeDefinition>()
            .filter { it.hasDirective(name) }

        items.forEach {
            definitions.add(createConditionInput(it))
            definitions.add(createEdge(it.name))
            definitions.add(createConnection(it.name))
        }

        definitions.add(createExtendObjectQuery(items))

        return definitions
    }

    private fun createConditionInput(it: TypeDefinition<ObjectTypeDefinition>): TypeDefinition<InputObjectTypeDefinition> {
        val inputs = mutableListOf<InputValueDefinition>()

        it.children.filterIsInstance<FieldDefinition>().forEach {
            val unwrappedType = unwrapNonNull(it.type)

            val map = mapOf(
                "String" to "StringComparisonInput",
                "ID" to "IDComparisonInput",
                "Int" to "IntComparisonInput",
            )

            if (unwrappedType is TypeName && map.containsKey(unwrappedType.name)) {
                inputs.add(
                    InputValueDefinition.newInputValueDefinition()
                        .name(it.name)
                        .type(TypeName(map[unwrappedType.name]))
                        .build()
                )
            }
        }

        inputs.add(
            InputValueDefinition.newInputValueDefinition()
                .name("_and")
                .type(ListType(TypeName("${it.name}ConditionInput")))
                .build()
        )

        inputs.add(
            InputValueDefinition.newInputValueDefinition()
                .name("_or")
                .type(ListType(TypeName("${it.name}ConditionInput")))
                .build()
        )

        return InputObjectTypeDefinition.newInputObjectDefinition()
            .name("${it.name}ConditionInput")
            .inputValueDefinitions(inputs)
            .build()
    }

    fun unwrapNonNull(it: Type<*>): Type<*>? {
        return if (it is NonNullType) {
            it.children.first() as Type<*>?
        } else {
            it
        }
    }

    private fun createExtendObjectQuery(it: List<TypeDefinition<*>>): TypeDefinition<ObjectTypeDefinition> {
        return ObjectTypeExtensionDefinition.newObjectTypeDefinition()
            .fieldDefinitions(
                it.map {
                    FieldDefinition.newFieldDefinition()
                        .name("${CaseUtils.toCamelCase(it.name, false)}s")
                        .inputValueDefinition(
                            InputValueDefinition.newInputValueDefinition()
                                .name("first")
                                .type(TypeName("Int"))
                                .build()
                        )
                        .inputValueDefinition(
                            InputValueDefinition.newInputValueDefinition()
                                .name("last")
                                .type(TypeName("Int"))
                                .build()
                        )
                        .inputValueDefinition(
                            InputValueDefinition.newInputValueDefinition()
                                .name("before")
                                .type(TypeName("String"))
                                .build()
                        )
                        .inputValueDefinition(
                            InputValueDefinition.newInputValueDefinition()
                                .name("after")
                                .type(TypeName("String"))
                                .build()
                        )
                        .inputValueDefinition(
                            InputValueDefinition.newInputValueDefinition()
                                .name("where")
                                .type(TypeName("${it.name}ConditionInput"))
                                .build()
                        )
                        .type(TypeName("${it.name}Connection"))
                        .build()
                }
            )
            .name("Query")
            .build()
    }

    private fun createConnection(name: String): TypeDefinition<ObjectTypeDefinition?> {
        return ObjectTypeDefinition.newObjectTypeDefinition()
            .name("${name}Connection")
            .fieldDefinition(
                FieldDefinition.newFieldDefinition()
                    .name("edges")
                    .type(ListType(TypeName("${name}Edge")))
                    .build()
            )
            .fieldDefinition(
                FieldDefinition.newFieldDefinition()
                    .name("pageInfo")
                    .type(NonNullType(TypeName("PageInfo")))
                    .build()
            )
            .build()
    }

    private fun createEdge(name: String): TypeDefinition<ObjectTypeDefinition?> {
        return ObjectTypeDefinition.newObjectTypeDefinition()
            .name("${name}Edge")
            .fieldDefinitions(
                listOf(
                    FieldDefinition.newFieldDefinition()
                        .name("cursor")
                        .type(NonNullType(TypeName("String")))
                        .build(),
                    FieldDefinition.newFieldDefinition()
                        .name("node")
                        .type(TypeName("Product"))
                        .build()
                )
            ).build()
    }

    private fun parseConnectionDirective(types: MutableList<TypeDefinition<*>>): List<TypeDefinition<*>> {
        val definitions = mutableListOf<TypeDefinition<*>>()

        if (!types.any { it.name == "PageInfo" }) {
            definitions.add(createPageInfo())
        }

        return definitions
    }

    private fun createPageInfo(): TypeDefinition<ObjectTypeDefinition> {
        return ObjectTypeDefinition.newObjectTypeDefinition()
            .name("PageInfo")
            .fieldDefinition(
                FieldDefinition.newFieldDefinition()
                    .name("hasNextPage")
                    .type(NonNullType(TypeName("Boolean")))
                    .build()
            )
            .fieldDefinition(
                FieldDefinition.newFieldDefinition()
                    .name("hasPreviousPage")
                    .type(NonNullType(TypeName("Boolean")))
                    .build()
            )
            .fieldDefinition(
                FieldDefinition.newFieldDefinition()
                    .name("startCursor")
                    .type(TypeName("String"))
                    .build()
            )
            .fieldDefinition(
                FieldDefinition.newFieldDefinition()
                    .name("endCursor")
                    .type(TypeName("String"))
                    .build()
            )
            .build()
    }

    private fun createNodeInterface(): InterfaceTypeDefinition {
        val idField = FieldDefinition.newFieldDefinition()
            .name("id")
            .type(NonNullType(TypeName("ID")))
            .build()

        return InterfaceTypeDefinition.newInterfaceTypeDefinition()
            .name("Node")
            .definitions(
                listOf(
                    idField
                )
            )
            .build()
    }
}
