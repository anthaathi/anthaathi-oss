package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.CustomerDocumentEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface CustomerDocumentEntityRepository : PagingAndSortingRepository<CustomerDocumentEntity, UUID> {
}
