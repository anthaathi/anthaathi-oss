package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.TaskPreRequisiteEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface TaskPreRequisiteEntityRepository : CrudRepository<TaskPreRequisiteEntity, UUID> {
}
