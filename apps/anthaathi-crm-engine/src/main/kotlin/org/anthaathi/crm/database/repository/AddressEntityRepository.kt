package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.AddressEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface AddressEntityRepository : CrudRepository<AddressEntity, UUID> {
}
