package org.anthaathi.crm.services

import graphql.relay.Relay.ResolvedGlobalId
import graphql.relay.SimpleListConnection
import org.anthaathi.crm.database.converter.fromEntity
import org.anthaathi.crm.database.converter.type
import org.anthaathi.crm.database.repository.ProjectEntityRepository
import org.anthaathi.crm.types.Organization
import org.anthaathi.crm.types.Project
import org.anthaathi.crm.utils.IdGenerator
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Pageable
import org.springframework.data.domain.Sort
import org.springframework.stereotype.Component
import java.time.OffsetDateTime
import java.util.*


@Component
class ProjectService(
    @Autowired val projectEntityRepository: ProjectEntityRepository,
) {
    fun findById(id: ResolvedGlobalId): Project? {
        if (Project.type() != id.type) {
            return null
        }

        val result = projectEntityRepository.findById(UUID.fromString(id.id))

        if (!result.isPresent) {
            return null
        }

        return Project.fromEntity(result.get())
    }

    fun findById(id: String): Project? {
        return findById(IdGenerator.fromGlobalId(id))
    }

    fun findProjectsByOrganization(id: ResolvedGlobalId) {
        if (Organization.type() != id.type) {
            return
        }

        val paging: Pageable = PageRequest.of(1, 12, Sort.by(""))

        projectEntityRepository.findByOrganizationIdAndCreatedAtGreaterThan(
            organizationId = UUID.fromString(id.id),
            createdAt = OffsetDateTime.now(),
            Pageable.ofSize(12)
        )
    }
}
