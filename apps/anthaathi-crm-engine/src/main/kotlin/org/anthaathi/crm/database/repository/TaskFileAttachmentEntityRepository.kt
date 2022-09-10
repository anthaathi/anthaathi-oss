package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.TaskFileAttachmentEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface TaskFileAttachmentEntityRepository : CrudRepository<TaskFileAttachmentEntity, UUID> {
}
