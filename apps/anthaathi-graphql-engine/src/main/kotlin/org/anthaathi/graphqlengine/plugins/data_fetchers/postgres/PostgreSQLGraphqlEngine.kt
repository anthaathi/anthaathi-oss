package org.anthaathi.graphqlengine.plugins.data_fetchers.postgres

import graphql.language.FieldDefinition
import graphql.language.TypeDefinition
import graphql.schema.GraphQLCodeRegistry
import graphql.schema.idl.TypeDefinitionRegistry
import org.anthaathi.graphqlengine.plugins.core.interfaces.GQLDataFetcher

class PostgreSQLGraphqlEngine : GQLDataFetcher {
    override val directive = "postgres"

    override fun registry(
        codeRegistryBuilder: GraphQLCodeRegistry.Builder,
        registry: TypeDefinitionRegistry?,
        fieldDefinition: FieldDefinition,
        rootType: TypeDefinition<*>
    ): GraphQLCodeRegistry.Builder? {
        println(fieldDefinition.name)

        println(rootType)

        return null
    }
}
