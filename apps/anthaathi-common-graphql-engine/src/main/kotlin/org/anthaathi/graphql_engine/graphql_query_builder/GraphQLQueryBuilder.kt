package org.anthaathi.graphql_engine.graphql_query_builder
import graphql.schema.GraphQLEnumType
import graphql.schema.GraphQLSchema
import org.eclipse.microprofile.graphql.GraphQLApi
import javax.enterprise.event.Observes


@GraphQLApi
class GraphQLQueryBuilder {
    fun addInstrumentation(@Observes builder: GraphQLSchema.Builder): GraphQLSchema.Builder {
        val myOwnEnum = GraphQLEnumType.newEnum()
            .name("SomeEnum")
            .description("Adding some enum type")
            .value("value1")
            .value("value2")
            .build()

        return builder.additionalType(myOwnEnum);
    }
}
