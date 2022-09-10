package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.PreRequisiteEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface PreRequisiteEntityRepository : PagingAndSortingRepository<PreRequisiteEntity, UUID> {
}
