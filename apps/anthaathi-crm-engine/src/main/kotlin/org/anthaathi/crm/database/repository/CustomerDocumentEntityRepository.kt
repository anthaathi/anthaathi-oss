package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.CustomerDocumentEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface CustomerDocumentEntityRepository : CrudRepository<CustomerDocumentEntity, UUID> {
}
