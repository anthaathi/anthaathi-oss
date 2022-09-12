package org.anthaathi.crm.database.repository

import org.anthaathi.crm.database.entity.TaskFileAttachmentEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface TaskFileAttachmentEntityRepository : PagingAndSortingRepository<TaskFileAttachmentEntity, UUID>
