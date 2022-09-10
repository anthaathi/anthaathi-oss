package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.AddressEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface AddressEntityRepository : PagingAndSortingRepository<AddressEntity, UUID> {
}
