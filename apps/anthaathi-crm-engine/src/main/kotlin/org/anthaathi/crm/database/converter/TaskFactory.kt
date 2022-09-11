package org.anthaathi.crm.database.converter

import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.database.entity.TaskEntity
import org.anthaathi.crm.types.Status
import org.anthaathi.crm.types.Task
import org.anthaathi.crm.utils.IdGenerator
import java.time.OffsetTime
import kotlin.random.Random

class TaskFactory: ConverterFactory<Task, TaskEntity> {
    override val type: String
        get() = "Task"

    override fun fromEntity(entity: TaskEntity): Task {
        return Task(
            id = IdGenerator.toGlobalId(type, entity.id.toString()),
            title = entity.title!!,
            description = entity.description,
            dueDate = entity.dueDate?.atTime(OffsetTime.now()),
            priority = entity.priority,
            icon = entity.icon,
            background = entity.background,
            reportedBy = null,
            status = Status(
                id = IdGenerator.toGlobalId(DgsConstants.STATUS.TYPE_NAME, Random.nextInt().toString()),
                name = entity.status?.name!!,
                createdAt = entity.createdAt!!
            ),
            assigned = null,
            followers = null,
            taskStages = null,
            tag = null,
            createdAt = entity.createdAt!!,
            updatedAt = entity.updatedAt
        )
    }
}
