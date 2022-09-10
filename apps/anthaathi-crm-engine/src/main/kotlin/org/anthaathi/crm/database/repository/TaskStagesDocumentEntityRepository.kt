package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.TaskStagesDocumentEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface TaskStagesDocumentEntityRepository : CrudRepository<TaskStagesDocumentEntity, UUID> {
}
