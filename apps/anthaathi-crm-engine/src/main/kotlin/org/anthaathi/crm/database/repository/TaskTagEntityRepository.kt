package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.TaskTagEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface TaskTagEntityRepository : CrudRepository<TaskTagEntity, UUID> {
}
