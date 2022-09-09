package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.TaskCommentEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface TaskCommentEntityRepository : CrudRepository<TaskCommentEntity, UUID> {
}
