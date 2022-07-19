package org.anthaathi.graphqlengine.plugins.core.input_generator

import graphql.language.InputObjectTypeDefinition
import graphql.language.InputValueDefinition
import graphql.language.TypeName
import graphql.schema.idl.TypeDefinitionRegistry

class BooleanCmp : InputGenerator{
    override fun registry(schemaRegistry: TypeDefinitionRegistry): TypeDefinitionRegistry? {
        val registry = TypeDefinitionRegistry()
        registry.add(generate())
        return registry
    }

    private fun generate(): InputObjectTypeDefinition? {
        return InputObjectTypeDefinition.newInputObjectDefinition()
            .name("BooleanComparisonInput")
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("eq")
                    .type(TypeName("Boolean"))
                    .build()
            )
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("neq")
                    .type(TypeName("Boolean"))
                    .build()
            )
            .build()
    }
}
