package org.anthaathi.crm.database.repository

import org.anthaathi.crm.database.entity.DocumentEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface DocumentEntityRepository : PagingAndSortingRepository<DocumentEntity, UUID>
