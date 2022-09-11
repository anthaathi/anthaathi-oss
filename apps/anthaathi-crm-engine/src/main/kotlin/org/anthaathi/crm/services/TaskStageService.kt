package org.anthaathi.crm.services

import graphql.relay.Relay
import org.anthaathi.crm.database.converter.TaskStageFactory
import org.anthaathi.crm.database.converter.fromEntity
import org.anthaathi.crm.database.converter.type
import org.anthaathi.crm.database.repository.TaskStageEntityRepository
import org.anthaathi.crm.types.TaskStage
import org.anthaathi.crm.utils.IdGenerator
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.util.*

@Component
class TaskStageService(
    @Autowired val taskStageEntityRepository: TaskStageEntityRepository
) {
    val factory = TaskStageFactory()
    fun findById(id: String): TaskStage? {
        val taskStageId = IdGenerator.fromGlobalId(id)
        return findById(taskStageId)
    }

    fun findById(resolvedGlobalId: Relay.ResolvedGlobalId): TaskStage? {
        if (TaskStage.type() != resolvedGlobalId.type) {
            return null
        }

        val entity = taskStageEntityRepository
            .findById(UUID.fromString(resolvedGlobalId.id))

        if (!entity.isPresent) {
            return null
        }

        return TaskStage.fromEntity(entity.get())
    }
}
