package org.anthaathi.graphqlengine.plugins.core.input_generator

import au.com.origin.snapshots.Expect
import au.com.origin.snapshots.junit5.SnapshotExtension
import graphql.language.InputObjectTypeDefinition
import graphql.language.TypeName
import graphql.schema.idl.SchemaParser
import graphql.schema.idl.TypeDefinitionRegistry
import org.junit.jupiter.api.Test

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.extension.ExtendWith
import java.io.File

@ExtendWith(SnapshotExtension::class)
internal class IDCmpTest {
    private val expect: Expect? = null

    @Test
    fun registry() {
        val typeDefinitionRegistry = TypeDefinitionRegistry()

        val result = IDCmp().registry(typeDefinitionRegistry)!!

        expect!!
            .serializer("graphql")
            .toMatchSnapshot(result)
    }
}
