package org.anthaathi.graphqlengine.plugins.core.interfaces

import graphql.language.FieldDefinition
import graphql.language.TypeDefinition
import graphql.schema.GraphQLCodeRegistry
import graphql.schema.idl.TypeDefinitionRegistry

interface CorePlugin {
    val idPrefix: String

    fun registry(schemaRegistry: TypeDefinitionRegistry): TypeDefinitionRegistry?
}

interface SchemaTypeGenerator {
    val decorators: List<String>

    fun registry(schemaRegistry: TypeDefinitionRegistry): TypeDefinitionRegistry?
}

interface GQLDataFetcher {
    val directive: String

    fun registry(
        codeRegistryBuilder: GraphQLCodeRegistry.Builder,
        registry: TypeDefinitionRegistry?,
        fieldDefinition: FieldDefinition,
        rootType: TypeDefinition<*>
    ): GraphQLCodeRegistry.Builder?
}
