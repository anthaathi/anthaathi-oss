package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.TeamEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface TeamEntityRepository : CrudRepository<TeamEntity, UUID> {
}
