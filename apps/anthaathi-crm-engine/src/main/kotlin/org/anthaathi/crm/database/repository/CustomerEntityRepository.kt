package org.anthaathi.crm.database.repository

import org.anthaathi.crm.database.entity.CustomerEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface CustomerEntityRepository : PagingAndSortingRepository<CustomerEntity, UUID>
