package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.TagEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface TagEntityRepository : PagingAndSortingRepository<TagEntity, UUID> {
}
