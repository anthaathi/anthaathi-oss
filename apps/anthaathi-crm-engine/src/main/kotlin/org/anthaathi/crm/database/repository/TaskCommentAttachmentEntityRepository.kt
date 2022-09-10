package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.TaskCommentAttachmentEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface TaskCommentAttachmentEntityRepository : PagingAndSortingRepository<TaskCommentAttachmentEntity, UUID> {
}
