package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.PreRequisiteEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface PreRequisiteEntityRepository : CrudRepository<PreRequisiteEntity, UUID> {
}
