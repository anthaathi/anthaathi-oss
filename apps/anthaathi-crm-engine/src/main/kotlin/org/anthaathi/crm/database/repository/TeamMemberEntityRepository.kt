package org.anthaathi.crm.database.repository

import org.anthaathi.crm.database.entity.TeamMemberEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface TeamMemberEntityRepository : PagingAndSortingRepository<TeamMemberEntity, UUID>
