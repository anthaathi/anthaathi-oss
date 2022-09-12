package org.anthaathi.crm.database.repository

import org.anthaathi.crm.database.entity.OrganizationAddressEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface OrganizationAddressEntityRepository : PagingAndSortingRepository<OrganizationAddressEntity, UUID>
