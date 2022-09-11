package org.anthaathi.crm.database.repository

import org.anthaathi.crm.database.entity.CustomerMetaEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface CustomerMetaEntityRepository : PagingAndSortingRepository<CustomerMetaEntity, UUID>
