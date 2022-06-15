package org.anthaathi.graphql_engine.graphql_query_builder

import graphql.schema.GraphQLSchema
import graphql.schema.idl.SchemaParser
import graphql.schema.idl.TypeDefinitionRegistry
import org.eclipse.microprofile.graphql.GraphQLApi
import java.io.InputStream
import java.util.stream.Collectors
import javax.enterprise.event.Observes


@GraphQLApi
class GraphQLQueryBuilder {
    fun addInstrumentation(@Observes builder: GraphQLSchema.Builder): GraphQLSchema.Builder {
        val inputStream: InputStream = GraphQLQueryBuilder::class.java
            .getResourceAsStream("schema.graphql") as InputStream

        val application = inputStream.bufferedReader()
            .lines()
            .collect(Collectors.joining("\n"))

        val schemaParser = SchemaParser()
        val typeDefinitionRegistry: TypeDefinitionRegistry = schemaParser.parse(application)

        return builder
    }
}
