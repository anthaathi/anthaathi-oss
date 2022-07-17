package org.anthaathi.graphqlengine.plugins.core.interfaces

import graphql.schema.idl.TypeDefinitionRegistry

interface CorePlugin {
    val idPrefix: String

    fun registry(schemaRegistry: TypeDefinitionRegistry): TypeDefinitionRegistry?
}

interface SchemaTypeGenerator {
    val decorators: List<String>

    fun registry(schemaRegistry: TypeDefinitionRegistry): TypeDefinitionRegistry?
}
