package org.anthaathi.crm.services

import graphql.relay.Relay
import org.anthaathi.crm.database.converter.TaskTagFactory
import org.anthaathi.crm.database.repository.TaskTagEntityRepository
import org.anthaathi.crm.types.TaskTag
import org.anthaathi.crm.utils.IdGenerator
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.util.*

@Component
class TaskTagService(
    @Autowired val taskTagEntityRepository: TaskTagEntityRepository
) {
    val factory = TaskTagFactory()

    fun findById(id: String): TaskTag? {
        val taskTagId = IdGenerator.fromGlobalId(id)
        return findById(taskTagId)
    }

    fun findById(resolvedGlobalId: Relay.ResolvedGlobalId): TaskTag? {
        if (factory.type != resolvedGlobalId.type) {
            return null
        }

        val entity = taskTagEntityRepository
            .findById(UUID.fromString(resolvedGlobalId.id))

        if (!entity.isPresent) {
            return null
        }

        return factory.fromEntity(entity.get())
    }
}
