package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.TaskAssignedUserEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface TaskAssignedUserEntityRepository : CrudRepository<TaskAssignedUserEntity, UUID> {
}
