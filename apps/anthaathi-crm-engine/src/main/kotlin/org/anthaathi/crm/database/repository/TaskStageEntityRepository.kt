package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.TaskStageEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface TaskStageEntityRepository : CrudRepository<TaskStageEntity, UUID> {
}
