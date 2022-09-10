package org.anthaathi.crm.database.converter

import org.anthaathi.crm.database.entity.TaskCommentEntity
import org.anthaathi.crm.types.TaskComment
import org.anthaathi.crm.utils.IdGenerator

fun TaskComment.Companion.type(): String {
    return "TaskComment"
}

fun TaskComment.Companion.fromEntity(userEntity: TaskCommentEntity): TaskComment {
    return TaskComment(
        id = IdGenerator.toGlobalId(type(), userEntity.id.toString()),
        content = userEntity.content!!,
        createdAt = userEntity.createdAt!!,
        updatedAt = userEntity.updatedAt,
    )
}
