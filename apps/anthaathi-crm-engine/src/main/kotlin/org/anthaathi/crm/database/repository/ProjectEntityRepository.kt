package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.ProjectEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface ProjectEntityRepository : CrudRepository<ProjectEntity, UUID> {
}
