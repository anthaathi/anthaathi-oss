package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.OrganizationEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface OrganizationEntityRepository : PagingAndSortingRepository<OrganizationEntity, UUID> {
}
