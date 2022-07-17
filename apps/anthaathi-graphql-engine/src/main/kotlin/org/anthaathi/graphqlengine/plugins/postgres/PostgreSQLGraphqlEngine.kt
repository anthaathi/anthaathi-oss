package org.anthaathi.graphqlengine.plugins.postgres

import graphql.schema.idl.TypeDefinitionRegistry
import org.anthaathi.graphqlengine.plugins.core.interfaces.CorePlugin

class PostgreSQLGraphqlEngine : CorePlugin {
    override val idPrefix: String
        get() = "db"

    override fun registry(schemaRegistry: TypeDefinitionRegistry): TypeDefinitionRegistry? {
        TODO("Not yet implemented")
    }

}
