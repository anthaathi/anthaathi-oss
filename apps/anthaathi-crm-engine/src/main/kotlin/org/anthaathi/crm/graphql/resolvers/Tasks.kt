package org.anthaathi.crm.graphql.resolvers

import graphql.relay.Connection
import graphql.relay.SimpleListConnection
import graphql.schema.DataFetchingEnvironment
import io.smallrye.graphql.api.Context
import org.anthaathi.crm.graphql.types.TaskGQL
import org.eclipse.microprofile.graphql.Description
import org.eclipse.microprofile.graphql.GraphQLApi
import org.eclipse.microprofile.graphql.Query
import java.util.*
import javax.inject.Inject


@GraphQLApi
class Tasks(
    @Inject
    var context: Context?
) {
    @Query("tasks")
    @Description("Get all Films from a galaxy far far away")
    fun getTasks(): Connection<TaskGQL> {
        return SimpleListConnection(Collections.singletonList(TaskGQL("omkar")))
            .get(context!!.unwrap(DataFetchingEnvironment::class.java))
    }
}
