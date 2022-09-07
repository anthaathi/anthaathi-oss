package org.anthaathi.crm.graphql.types

import graphql.relay.Connection
import org.eclipse.microprofile.graphql.Id
import org.eclipse.microprofile.graphql.Type
import java.util.Date

@Type("Task")
class TaskGQL(
    @set:Id
    @get:Id
    override var id: String,
    var title: String? = null,
    var description: String? = null,
    var dueDate: Date? = null,
    var priority: Int? = null,
    var isTemplate: Boolean? = null,
    var icon: String? = null,
    var background: String? = null,
    var reporter: UserGQL? = null,
    var assignee: Connection<UserGQL>? = null,
    var taskStages: Connection<TaskStagesGQL>? = null,
) : Node
