package org.anthaathi.crm.services

import graphql.relay.Relay
import org.anthaathi.crm.database.converter.fromEntity
import org.anthaathi.crm.database.converter.type
import org.anthaathi.crm.database.repository.TaskEntityRepository
import org.anthaathi.crm.types.Task
import org.anthaathi.crm.utils.IdGenerator
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.util.*

@Component
class TaskService(
    @Autowired val taskEntityRepository: TaskEntityRepository
) {
    fun findById(id: String): Task? {
        val taskId = IdGenerator.fromGlobalId(id)
        return findById(taskId)
    }

    fun findById(resolvedGlobalId: Relay.ResolvedGlobalId): Task? {
        if (Task.type() != resolvedGlobalId.type) {
            return null
        }

        val entity = taskEntityRepository
            .findById(UUID.fromString(resolvedGlobalId.id))

        if (!entity.isPresent) {
            return null
        }

        return Task.fromEntity(entity.get())
    }
}