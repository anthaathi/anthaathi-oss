package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.CustomerMetaEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface CustomerMetaEntityRepository : CrudRepository<CustomerMetaEntity, UUID> {
}
