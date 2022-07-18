package org.anthaathi.graphqlengine.plugins.core.input_generator

import au.com.origin.snapshots.Expect
import au.com.origin.snapshots.junit5.SnapshotExtension
import graphql.language.ScalarTypeDefinition
import graphql.schema.idl.SchemaParser
import graphql.schema.idl.TypeDefinitionRegistry
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith

@ExtendWith(SnapshotExtension::class)
internal class DateTimeCmpTest {
    private val expect: Expect? = null

    fun registry() {
        val typeDefinitionRegistry = TypeDefinitionRegistry()

        val result = DateTimeCmp().registry(typeDefinitionRegistry)!!

        expect!!
            .serializer("graphql")
            .toMatchSnapshot(result)
    }
}
