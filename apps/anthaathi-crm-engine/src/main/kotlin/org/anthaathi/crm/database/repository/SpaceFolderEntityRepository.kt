package org.anthaathi.crm.database.repository

import org.anthaathi.crm.database.entity.SpaceFolderEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface SpaceFolderEntityRepository : PagingAndSortingRepository<SpaceFolderEntity, UUID>
