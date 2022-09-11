package org.anthaathi.crm.database.converter

import org.anthaathi.crm.database.entity.TaskTagEntity
import org.anthaathi.crm.types.TaskTag
import org.anthaathi.crm.utils.IdGenerator

class TaskTagFactory: ConverterFactory<TaskTag, TaskTagEntity> {
    override val type: String
        get() = "TaskTag"

    override fun fromEntity(entity: TaskTagEntity): TaskTag {
        return TaskTag(
            id = IdGenerator.toGlobalId(type, entity.id.toString()),
            title = null,
            color = null,
            createdAt = entity.createdAt!!,
            updatedAt = entity.updatedAt
        )
    }
}
