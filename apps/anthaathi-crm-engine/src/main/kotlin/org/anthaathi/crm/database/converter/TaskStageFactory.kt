package org.anthaathi.crm.database.converter

import org.anthaathi.crm.database.entity.TaskStageEntity
import org.anthaathi.crm.types.TaskStage
import org.anthaathi.crm.utils.IdGenerator

class TaskStageFactory : ConverterFactory<TaskStage, TaskStageEntity, Any> {
    override val type: String
        get() = "TaskStage"

    override fun toEntity(input: Any): TaskStageEntity {
        TODO("Not yet implemented")
    }

    override fun fromEntity(entity: TaskStageEntity): TaskStage {
        return TaskStage(
            id = IdGenerator.toGlobalId(type, entity.id.toString()),
            title = entity.title!!,
            icon = entity.icon,
            completed = false,
            documents = null,
            comments = null,
            activity = null,
            createdAt = entity.createdAt!!,
            updatedAt = entity.updatedAt
        )
    }
}
