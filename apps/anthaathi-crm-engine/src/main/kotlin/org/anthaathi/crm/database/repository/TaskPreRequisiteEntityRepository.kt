package org.anthaathi.crm.database.repository

import org.anthaathi.crm.database.entity.TaskPreRequisiteEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface TaskPreRequisiteEntityRepository : PagingAndSortingRepository<TaskPreRequisiteEntity, UUID>
