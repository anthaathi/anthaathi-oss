package org.anthaathi.graphqlengine.plugins.core.input_generator

import graphql.language.InputObjectTypeDefinition
import graphql.language.InputValueDefinition
import graphql.language.TypeName
import graphql.schema.idl.TypeDefinitionRegistry

class IDCmp : InputGenerator {
    override fun registry(schemaRegistry: TypeDefinitionRegistry): TypeDefinitionRegistry? {
        val registry = TypeDefinitionRegistry()
        registry.add(generate())
        return registry
    }

    private fun generate(): InputObjectTypeDefinition? {
        return InputObjectTypeDefinition.newInputObjectDefinition()
            .name("IDComparisonInput")
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("eq")
                    .type(TypeName("ID"))
                    .build()
            )
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("neq")
                    .type(TypeName("ID"))
                    .build()
            )
            .build()
    }
}
