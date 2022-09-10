package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.TaskEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface TaskEntityRepository : PagingAndSortingRepository<TaskEntity, UUID> {
}
