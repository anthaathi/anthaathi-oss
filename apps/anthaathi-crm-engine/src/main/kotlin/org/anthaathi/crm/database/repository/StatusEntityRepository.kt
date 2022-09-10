package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.StatusEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface StatusEntityRepository : PagingAndSortingRepository<StatusEntity, UUID> {
}
