package org.anthaathi.crm.database.converter

import org.anthaathi.crm.database.entity.TaskCommentEntity
import org.anthaathi.crm.types.TaskComment
import org.anthaathi.crm.utils.IdGenerator
import org.anthaathi.crm.database.entity.TaskCommentEntity as TaskCommentEntity1

class TaskCommentFactory: ConverterFactory<TaskComment, TaskCommentEntity1> {
    override val type: String
        get() = "TaskComment"

    override fun fromEntity(entity: TaskCommentEntity): TaskComment {
        return TaskComment(
            id = IdGenerator.toGlobalId(type, entity.id.toString()),
            content = entity.content!!,
            replyTo = null,
            createdAt = entity.createdAt!!,
            updatedAt = entity.updatedAt
        )
    }
}
