package org.anthaathi.graphqlengine.plugins.core.input_generator

import graphql.language.*
import graphql.schema.idl.TypeDefinitionRegistry

class DateTimeCmp: InputGenerator {
    override fun registry(schemaRegistry: TypeDefinitionRegistry): TypeDefinitionRegistry? {
        val registry = TypeDefinitionRegistry()
        registry.add(generate())
        return registry
    }

    private fun generate(): InputObjectTypeDefinition? {
        return InputObjectTypeDefinition.newInputObjectDefinition()
            .name("DateTimeComparisonInput")
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("eq")
                    .type(TypeName("DateTime"))
                    .build()
            )
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("neq")
                    .type(TypeName("DateTime"))
                    .build()
            )
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("gt")
                    .type(TypeName("DateTime"))
                    .build()
            )
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("gte")
                    .type(TypeName("DateTime"))
                    .build()
            )
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("lt")
                    .type(TypeName("DateTime"))
                    .build()
            )
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("lte")
                    .type(TypeName("DateTime"))
                    .build()
            )
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("between")
                    .type(ListType.newListType()
                        .type(NonNullType(TypeName("DateTime")))
                        .build())
                    .build()
            )
            .build()
    }
}
