package org.anthaathi.crm.database.repository

import org.anthaathi.crm.database.entity.TeamEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface TeamEntityRepository : PagingAndSortingRepository<TeamEntity, UUID>
