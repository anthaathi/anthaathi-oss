package org.anthaathi.graphqlengine.plugins.core.input_generator

import graphql.schema.idl.TypeDefinitionRegistry

interface InputGenerator {
    fun registry(schemaRegistry: TypeDefinitionRegistry): TypeDefinitionRegistry?
}
