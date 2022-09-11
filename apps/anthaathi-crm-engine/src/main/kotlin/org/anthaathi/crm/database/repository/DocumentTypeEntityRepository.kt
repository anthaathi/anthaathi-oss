package org.anthaathi.crm.database.repository

import org.anthaathi.crm.database.entity.DocumentTypeEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface DocumentTypeEntityRepository : PagingAndSortingRepository<DocumentTypeEntity, UUID>
