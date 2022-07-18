package org.anthaathi.graphqlengine.plugins.core.engine

import com.netflix.graphql.dgs.DgsCodeRegistry
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsTypeDefinitionRegistry
import graphql.language.*
import graphql.schema.GraphQLCodeRegistry
import graphql.schema.idl.TypeDefinitionRegistry
import org.anthaathi.graphqlengine.plugins.core.input_generator.*
import org.anthaathi.graphqlengine.plugins.core.interfaces.GQLDataFetcher
import org.anthaathi.graphqlengine.plugins.core.schema_generator.CRUDGenerator
import org.anthaathi.graphqlengine.plugins.data_fetchers.postgres.PostgreSQLGraphqlEngine


@DgsComponent
class CoreEngine {
    val plugins = listOf<GQLDataFetcher>(
        PostgreSQLGraphqlEngine()
    )
    val schemaGenerator = listOf(CRUDGenerator())

    val inputGenerator = listOf(
        StringCmp(),
        IDCmp(),
        BooleanCmp(),
        FloatCmp(),
        IntCmp(),
        DateTimeCmp()
    )

    @DgsTypeDefinitionRegistry
    fun registry(schemaRegistry: TypeDefinitionRegistry): TypeDefinitionRegistry? {
        var typeDefinitionRegistry = TypeDefinitionRegistry()

        inputGenerator.forEach {
            typeDefinitionRegistry = typeDefinitionRegistry.merge(it.registry(schemaRegistry))
        }

        schemaGenerator.forEach {
            typeDefinitionRegistry = typeDefinitionRegistry.merge(it.registry(schemaRegistry))
        }

        typeDefinitionRegistry.add(createNodeQuery())

        return typeDefinitionRegistry
    }

    @DgsCodeRegistry
    fun registry(
        codeRegistryBuilder: GraphQLCodeRegistry.Builder,
        registry: TypeDefinitionRegistry?
    ): GraphQLCodeRegistry.Builder? {
        var prev = codeRegistryBuilder

        (registry!!.types()["Query"] as ObjectTypeDefinition).fieldDefinitions.forEach {
            if (it.additionalData.containsKey("generatedFrom")) {
                val rootType = registry.types()[it.additionalData["generatedFrom"]]!!

                val matchedPlugin = plugins.find { plugin -> rootType.hasDirective(plugin.directive) }

                val outputFromPlugin = matchedPlugin!!.registry(prev, registry, it, rootType)

                if (outputFromPlugin != null) {
                    prev = outputFromPlugin
                }
            }
        }

        return prev
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
}
