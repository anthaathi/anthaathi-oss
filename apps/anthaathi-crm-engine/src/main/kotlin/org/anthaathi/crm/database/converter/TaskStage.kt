package org.anthaathi.crm.database.converter

import org.anthaathi.crm.database.entity.TaskStageEntity
import org.anthaathi.crm.types.TaskStage
import org.anthaathi.crm.utils.IdGenerator

fun TaskStage.Companion.type(): String {
    return "`TaskStage`"
}

fun TaskStage.Companion.fromEntity(userEntity: TaskStageEntity): TaskStage {
    return TaskStage(
        id = IdGenerator.toGlobalId(type(), userEntity.id.toString()),
        title = userEntity.title!!,
        createdAt = userEntity.createdAt!!,
        updatedAt = userEntity.updatedAt,
    )
}
