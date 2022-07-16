package org.anthaathi.graphqlengine.plugins.core.input_generator

import graphql.language.InputObjectTypeDefinition
import graphql.language.TypeName
import graphql.schema.idl.SchemaParser
import graphql.schema.idl.TypeDefinitionRegistry
import org.junit.jupiter.api.Test

import org.junit.jupiter.api.Assertions.*
import java.io.File

internal class IDCmpTest {

    @Test
    fun registry() {
        val typeDefinitionRegistry = TypeDefinitionRegistry()

        val result = IDCmp().registry(typeDefinitionRegistry)!!

        result.types().forEach { println(it) }

        assert(result.types()["IDComparisonInput"] != null)

        assert((result.types()["IDComparisonInput"] as InputObjectTypeDefinition).inputValueDefinitions.size == 2)
        assert(((result.types()["IDComparisonInput"] as InputObjectTypeDefinition).inputValueDefinitions.find { it.name == "_eq" }!!.type as TypeName).name == "ID")
        assert(((result.types()["IDComparisonInput"] as InputObjectTypeDefinition).inputValueDefinitions.find { it.name == "_neq" }!!.type as TypeName).name == "ID")
    }
}
