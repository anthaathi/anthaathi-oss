package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.CustomerAddressEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface CustomerAddressEntityRepository : CrudRepository<CustomerAddressEntity, UUID> {
}
