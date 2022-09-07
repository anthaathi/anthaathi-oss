package org.anthaathi.crm.graphql.types

import graphql.relay.Connection
import org.eclipse.microprofile.graphql.Id
import org.eclipse.microprofile.graphql.Type


@Type("TaskStages")
class TaskStagesGQL(
    @set:Id
    @get:Id
    override var id: String,
    var comments: Connection<TaskCommentGQL>? = null
) : Node
