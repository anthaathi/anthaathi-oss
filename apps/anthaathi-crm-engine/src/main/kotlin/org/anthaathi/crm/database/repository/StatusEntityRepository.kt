package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.StatusEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface StatusEntityRepository : CrudRepository<StatusEntity, UUID> {
}
