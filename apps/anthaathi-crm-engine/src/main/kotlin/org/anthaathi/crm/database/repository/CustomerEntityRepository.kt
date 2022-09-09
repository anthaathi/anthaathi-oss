package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.CustomerEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface CustomerEntityRepository : CrudRepository<CustomerEntity, UUID> {
}
