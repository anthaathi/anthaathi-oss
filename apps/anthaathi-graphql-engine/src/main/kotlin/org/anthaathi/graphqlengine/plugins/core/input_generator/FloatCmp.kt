package org.anthaathi.graphqlengine.plugins.core.input_generator

import graphql.language.InputObjectTypeDefinition
import graphql.language.InputValueDefinition
import graphql.language.TypeName
import graphql.schema.idl.TypeDefinitionRegistry

class FloatCmp: InputGenerator {
    override fun registry(schemaRegistry: TypeDefinitionRegistry): TypeDefinitionRegistry? {
        val registry = TypeDefinitionRegistry()
        registry.add(generate())

        return registry
    }

    private fun generate(): InputObjectTypeDefinition? {
        return InputObjectTypeDefinition.newInputObjectDefinition()
            .name("FloatComparisonInput")
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("eq")
                    .type(TypeName("Float"))
                    .build()
            )
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("neq")
                    .type(TypeName("Float"))
                    .build()
            )
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("gt")
                    .type(TypeName("Float"))
                    .build()
            )
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("gte")
                    .type(TypeName("Float"))
                    .build()
            )
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("lt")
                    .type(TypeName("Float"))
                    .build()
            )
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("lte")
                    .type(TypeName("Float"))
                    .build()
            )
            .build()
    }
}
