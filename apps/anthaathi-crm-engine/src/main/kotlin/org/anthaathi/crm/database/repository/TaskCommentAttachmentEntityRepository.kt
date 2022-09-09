package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.TaskCommentAttachmentEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface TaskCommentAttachmentEntityRepository : CrudRepository<TaskCommentAttachmentEntity, UUID> {
}
