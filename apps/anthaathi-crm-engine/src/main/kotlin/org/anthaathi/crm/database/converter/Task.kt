package org.anthaathi.crm.database.converter

import org.anthaathi.crm.database.entity.TaskEntity
import org.anthaathi.crm.types.Task
import org.anthaathi.crm.utils.IdGenerator

fun Task.Companion.type(): String {
    return "Task"
}

fun Task.Companion.fromEntity(userEntity: TaskEntity): Task {
    return Task(
        id = IdGenerator.toGlobalId(type(), userEntity.id.toString()),
        title = userEntity.title!!,
        description = userEntity.description,
        createdAt = userEntity.createdAt!!,
        updatedAt = userEntity.updatedAt,
    )
}
