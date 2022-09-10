package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.TeamMemberEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface TeamMemberEntityRepository : CrudRepository<TeamMemberEntity, UUID> {
}
