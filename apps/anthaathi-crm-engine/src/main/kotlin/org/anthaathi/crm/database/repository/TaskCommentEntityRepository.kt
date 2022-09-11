package org.anthaathi.crm.database.repository

import org.anthaathi.crm.database.entity.TaskCommentEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface TaskCommentEntityRepository : PagingAndSortingRepository<TaskCommentEntity, UUID>
