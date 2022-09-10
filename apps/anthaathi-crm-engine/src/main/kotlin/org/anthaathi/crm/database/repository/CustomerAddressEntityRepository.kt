package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.CustomerAddressEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface CustomerAddressEntityRepository : PagingAndSortingRepository<CustomerAddressEntity, UUID> {
}
