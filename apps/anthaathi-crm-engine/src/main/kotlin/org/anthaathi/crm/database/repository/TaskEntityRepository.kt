package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.TaskEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface TaskEntityRepository : CrudRepository<TaskEntity, UUID> {
}
