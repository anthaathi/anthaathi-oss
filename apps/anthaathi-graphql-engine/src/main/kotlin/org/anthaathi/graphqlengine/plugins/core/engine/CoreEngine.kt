package org.anthaathi.graphqlengine.plugins.core.engine

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsTypeDefinitionRegistry
import graphql.language.*
import graphql.schema.idl.TypeDefinitionRegistry
import org.anthaathi.graphqlengine.plugins.arango.ArangoGraphqlEngine
import org.anthaathi.graphqlengine.plugins.core.input_generator.IDCmp
import org.anthaathi.graphqlengine.plugins.core.input_generator.InputGenerator
import org.anthaathi.graphqlengine.plugins.core.input_generator.StringCmp
import org.anthaathi.graphqlengine.plugins.core.interfaces.CorePlugin

@DgsComponent
class CoreEngine {
    val plugins = listOf<CorePlugin>(
        ArangoGraphqlEngine()
    )

    val inputGenerator = listOf<InputGenerator>(
        StringCmp(),
        IDCmp()
    )

    @DgsTypeDefinitionRegistry
    fun registry(schemaRegistry: TypeDefinitionRegistry): TypeDefinitionRegistry? {
        var typeDefinitionRegistry = createNodeForQuery()

        plugins.forEach {
            typeDefinitionRegistry = typeDefinitionRegistry.merge(it.registry(schemaRegistry))
        }

        inputGenerator.forEach {
            typeDefinitionRegistry = typeDefinitionRegistry.merge(it.registry(schemaRegistry))
        }

        return typeDefinitionRegistry
    }

    private fun createNodeQuery(): ObjectTypeDefinition {
        return ObjectTypeExtensionDefinition.newObjectTypeDefinition()
            .fieldDefinition(
                FieldDefinition.newFieldDefinition()
                    .name("node")
                    .inputValueDefinition(
                        InputValueDefinition.newInputValueDefinition()
                            .name("id")
                            .type(TypeName("ID"))
                            .build()
                    )
                    .build()
            )
            .name("Query")
            .build()
    }

    private fun createNodeForQuery(): TypeDefinitionRegistry {
        val registry = TypeDefinitionRegistry()

        registry.add(createNodeInterface())

        return registry;
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
