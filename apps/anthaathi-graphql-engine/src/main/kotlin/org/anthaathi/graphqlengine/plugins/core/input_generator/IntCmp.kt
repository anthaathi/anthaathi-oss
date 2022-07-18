package org.anthaathi.graphqlengine.plugins.core.input_generator

import graphql.language.InputObjectTypeDefinition
import graphql.language.InputValueDefinition
import graphql.language.ListType
import graphql.language.NonNullType
import graphql.language.TypeName
import graphql.schema.idl.TypeDefinitionRegistry

class IntCmp : InputGenerator {
    override fun registry(schemaRegistry: TypeDefinitionRegistry): TypeDefinitionRegistry {
        val registry = TypeDefinitionRegistry()
        registry.add(generate())
        return registry
    }

    private fun generate(): InputObjectTypeDefinition? {
        return InputObjectTypeDefinition.newInputObjectDefinition()
            .name("IntComparisonInput")
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("eq")
                    .type(TypeName("Int"))
                    .build()
            )
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("neq")
                    .type(TypeName("Int"))
                    .build()
            )
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("gt")
                    .type(TypeName("Int"))
                    .build()
            )
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("gte")
                    .type(TypeName("Int"))
                    .build()
            )
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("lt")
                    .type(TypeName("Int"))
                    .build()
            )
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("lte")
                    .type(TypeName("Int"))
                    .build()
            )
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("in")
                    .type(ListType.newListType()
                        .type(NonNullType(TypeName("Int")))
                        .build())
                    .build()
            )
            .inputValueDefinition(
                InputValueDefinition.newInputValueDefinition()
                    .name("notIn")
                    .type(ListType.newListType()
                        .type(NonNullType(TypeName("Int")))
                        .build())
                    .build()
            )
            .build()
    }
}
