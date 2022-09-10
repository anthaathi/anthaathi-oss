package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.CustomerOrganizationEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface CustomerOrganizationEntityRepository : PagingAndSortingRepository<CustomerOrganizationEntity, UUID> {
}
