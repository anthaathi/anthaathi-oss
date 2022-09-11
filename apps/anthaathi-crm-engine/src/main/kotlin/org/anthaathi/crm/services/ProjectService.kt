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

    fun findById(id: ResolvedGlobalId): Project? {
        if (factory.type != id.type) {
            return null
        }

        println(id.id)

        val result = projectEntityRepository.findById(UUID.fromString(id.id))

        if (!result.isPresent) {
            return null
        }

        return factory.fromEntity(result.get())
    }

    fun findById(id: String): Project? {
        return findById(IdGenerator.fromGlobalId(id))
    }

    fun findByHandle(handle: String): Project? {
        val result = projectEntityRepository.findByHandle(handle) ?: return null
        return factory.fromEntity(result)
    }
}
