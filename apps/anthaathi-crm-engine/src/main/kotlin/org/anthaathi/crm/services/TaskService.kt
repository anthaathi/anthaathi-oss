package org.anthaathi.crm.services

import graphql.relay.Relay
import org.anthaathi.crm.database.converter.TaskFactory
import org.anthaathi.crm.database.repository.TaskEntityRepository
import org.anthaathi.crm.types.CreateTaskInput
import org.anthaathi.crm.types.CreateTaskResponse
import org.anthaathi.crm.types.Task
import org.anthaathi.crm.utils.IdGenerator
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.util.*

@Component
class TaskService(
    @Autowired val taskEntityRepository: TaskEntityRepository
) {
    val factory = TaskFactory()

    fun findById(id: String): Task? {
        val taskId = IdGenerator.fromGlobalId(id)
        return findById(taskId)
    }

    fun findById(resolvedGlobalId: Relay.ResolvedGlobalId): Task? {
        if (factory.type != resolvedGlobalId.type) {
            return null
        }

        val entity = taskEntityRepository
            .findById(UUID.fromString(resolvedGlobalId.id))

        if (!entity.isPresent) {
            return null
        }

        return factory.fromEntity(entity.get())
    }

    fun createTask(input: CreateTaskInput): CreateTaskResponse {
        val result = taskEntityRepository.save(factory.toEntity(input))
        return CreateTaskResponse(response = factory.fromEntity(result))
    }
}
