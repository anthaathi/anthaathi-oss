package org.anthaathi.crm.services

import graphql.relay.Relay
import org.anthaathi.crm.database.converter.fromEntity
import org.anthaathi.crm.database.converter.type
import org.anthaathi.crm.database.repository.TaskCommentEntityRepository
import org.anthaathi.crm.types.TaskComment
import org.anthaathi.crm.utils.IdGenerator
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.util.*

@Component
class TaskCommentService(
    @Autowired val taskCommentEntityRepository: TaskCommentEntityRepository
) {
    fun findById(id: String): TaskComment? {
        val taskCommentId = IdGenerator.fromGlobalId(id)
        return findById(taskCommentId)
    }

    fun findById(resolvedGlobalId: Relay.ResolvedGlobalId): TaskComment? {
        if (TaskComment.type() != resolvedGlobalId.type) {
            return null
        }

        val entity = taskCommentEntityRepository
            .findById(UUID.fromString(resolvedGlobalId.id))

        if (!entity.isPresent) {
            return null
        }

        return TaskComment.fromEntity(entity.get())
    }
}
