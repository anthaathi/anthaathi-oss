package org.anthaathi.crm.graphql.types

import org.eclipse.microprofile.graphql.Id

class TaskCommentGQL(
    @set:Id
    @get:Id
    override var id: String,
) : Node
