package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.TagEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface TagEntityRepository : CrudRepository<TagEntity, UUID> {
}
