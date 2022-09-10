package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.TaskStageEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface TaskStageEntityRepository : PagingAndSortingRepository<TaskStageEntity, UUID> {
}
