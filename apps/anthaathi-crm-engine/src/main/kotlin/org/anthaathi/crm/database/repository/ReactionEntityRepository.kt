package org.anthaathi.crm.database.repository

import org.anthaathi.crm.database.entity.ReactionEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface ReactionEntityRepository : PagingAndSortingRepository<ReactionEntity, UUID>
