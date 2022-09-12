package org.anthaathi.crm.services

import graphql.relay.Relay.ResolvedGlobalId
import org.anthaathi.crm.database.converter.ProjectFactory
import org.anthaathi.crm.database.repository.ProjectEntityRepository
import org.anthaathi.crm.types.Project
import org.anthaathi.crm.utils.IdGenerator
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.util.*


@Component
class ProjectService(
    @Autowired val projectEntityRepository: ProjectEntityRepository,
) {
    val factory = ProjectFactory()
    fun findById(id: String): Project? {
        val projectId = IdGenerator.fromGlobalId(id)
        return findById(projectId)
    }

    fun findById(resolvedGlobalId: ResolvedGlobalId): Project? {
        if (factory.type != resolvedGlobalId.type) {
            return null
        }

        val result = projectEntityRepository.findById(UUID.fromString(resolvedGlobalId.id))

        if (!result.isPresent) {
            return null
        }

        return factory.fromEntity(result.get())
    }

    fun findByHandle(handle: String): Project? {
        val result = projectEntityRepository.findByHandle(handle) ?: return null

        return factory.fromEntity(result)
    }
}
