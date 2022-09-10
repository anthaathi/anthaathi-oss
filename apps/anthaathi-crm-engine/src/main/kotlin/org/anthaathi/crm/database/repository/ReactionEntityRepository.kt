package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.ReactionEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface ReactionEntityRepository : CrudRepository<ReactionEntity, UUID> {
}
