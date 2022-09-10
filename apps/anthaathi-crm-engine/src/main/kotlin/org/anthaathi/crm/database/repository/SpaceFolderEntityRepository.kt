package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.SpaceFolderEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface SpaceFolderEntityRepository : CrudRepository<SpaceFolderEntity, UUID> {
}
