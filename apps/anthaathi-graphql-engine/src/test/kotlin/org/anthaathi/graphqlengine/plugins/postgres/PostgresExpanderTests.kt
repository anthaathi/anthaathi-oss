package org.anthaathi.graphqlengine.plugins.postgres

import graphql.schema.idl.SchemaParser
import org.anthaathi.graphqlengine.plugins.core.engine.CoreEngine
import org.junit.jupiter.api.Test
import java.io.File

class PostgresExpanderTests {
    private val testCases = mapOf(
        "input_1.graphql" to "result_1.graphql"
    )

    @Test
    fun testEqual() {
        val engine = CoreEngine()

        testCases.forEach { case ->
            val inputSchema = SchemaParser().parse(File(Thread.currentThread().contextClassLoader.getResource("./schema/${case.key}")!!.path))

            val outputSchema = SchemaParser().parse(File(Thread.currentThread().contextClassLoader.getResource("./schema/${case.value}")!!.path))

            engine.registry(inputSchema)!!.types().forEach {
                println(it.key)
            }

            println()

            outputSchema.types().forEach {
                println(it.key)
            }

            assert(engine.registry(inputSchema)!!.types().size == outputSchema.types().size)
        }
    }
}
