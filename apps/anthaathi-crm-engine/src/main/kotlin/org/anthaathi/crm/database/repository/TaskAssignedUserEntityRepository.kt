package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.TaskAssignedUserEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface TaskAssignedUserEntityRepository : PagingAndSortingRepository<TaskAssignedUserEntity, UUID> {
}
