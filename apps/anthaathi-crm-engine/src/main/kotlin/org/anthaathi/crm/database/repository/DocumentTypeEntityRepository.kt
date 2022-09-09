package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.DocumentTypeEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface DocumentTypeEntityRepository : CrudRepository<DocumentTypeEntity, UUID> {
}
