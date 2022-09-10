package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.TaskTagEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface TaskTagEntityRepository : PagingAndSortingRepository<TaskTagEntity, UUID> {
}
