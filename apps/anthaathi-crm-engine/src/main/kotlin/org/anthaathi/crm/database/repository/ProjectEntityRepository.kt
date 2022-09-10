package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.ProjectEntity
import org.springframework.data.domain.Pageable
import org.springframework.data.domain.Slice
import org.springframework.data.repository.CrudRepository
import java.time.OffsetDateTime
import java.util.*

interface ProjectEntityRepository : CrudRepository<ProjectEntity, UUID> {
    fun findByOrganizationIdAndCreatedAtGreaterThan(organizationId: UUID, createdAt: OffsetDateTime, paging: Pageable): Slice<ProjectEntity>
}
