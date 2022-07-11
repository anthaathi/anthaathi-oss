package org.anthaathi.graphqlengine.plugins.core.interfaces

import graphql.schema.idl.TypeDefinitionRegistry

enum class PluginKind {
    DATABASE,
}

interface CorePlugin {
    val name: String
    val kind: PluginKind
    val priority: Int
        get() = 0
    val idPrefix: String

    fun registry(schemaRegistry: TypeDefinitionRegistry): TypeDefinitionRegistry?
}
