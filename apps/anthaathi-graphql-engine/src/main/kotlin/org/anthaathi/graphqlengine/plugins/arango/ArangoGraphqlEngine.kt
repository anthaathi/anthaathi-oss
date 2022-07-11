package org.anthaathi.graphqlengine.plugins.arango

import graphql.language.*
import graphql.schema.idl.TypeDefinitionRegistry
import org.anthaathi.graphqlengine.plugins.core.interfaces.CorePlugin
import org.anthaathi.graphqlengine.plugins.core.interfaces.PluginKind
import org.apache.commons.text.CaseUtils

class ArangoGraphqlEngine : CorePlugin {
    override val name = "arangoCollection"
    override val kind: PluginKind = PluginKind.DATABASE
    override val idPrefix: String = "anthaathi://db/"

    override fun registry(schemaRegistry: TypeDefinitionRegistry): TypeDefinitionRegistry {
        val definitions = schemaRegistry.types()
        val typeDefinitionRegistry = TypeDefinitionRegistry()

        typeDefinitionRegistry.addAll(parseConnectionDirective(definitions.values.toMutableList()))
        typeDefinitionRegistry.addAll(createConnectionForQuery(definitions.values.toMutableList()))
        // typeDefinitionRegistry.addAll(createInsertMutation(definitions.values.toMutableList()))

        return typeDefinitionRegistry
    }

    private fun createInsertMutation(types: MutableList<TypeDefinition<*>>): List<TypeDefinition<*>> {
        val definitions = mutableListOf<TypeDefinition<*>>()

        val mutationList = mutableListOf<FieldDefinition>()

        types.filterIsInstance<ObjectTypeDefinition>().forEach { it ->
            mutationList.add(
                FieldDefinition.newFieldDefinition()
                    .name("create${it.name}")
                    .inputValueDefinition(
                        InputValueDefinition.newInputValueDefinition()
                            .name("input")
                            .type(TypeName("Create${it.name}Input"))
                            .build()
                    )
                    .build()
            )

            val inputValues: List<InputValueDefinition> = it.children.map {
                if (it.children !is FieldDefinition) {
                    return@map null
                }

                return@map InputValueDefinition.newInputValueDefinition()
                    .name("")
                    .type(TypeName(""))
                    .build()

            }.filterNotNull()

            definitions.add(
                InputObjectTypeDefinition.newInputObjectDefinition()
                    .name("Create${it.name}Input")
                    .inputValueDefinitions(inputValues)
                    .build()
            )
        }

        definitions.add(
            ObjectTypeExtensionDefinition.newObjectTypeDefinition()
                .name("Mutation")
                .fieldDefinitions(mutationList)
                .build()
        )

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

}
