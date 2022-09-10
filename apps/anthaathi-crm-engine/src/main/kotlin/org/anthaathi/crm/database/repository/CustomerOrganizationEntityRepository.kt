package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.CustomerOrganizationEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface CustomerOrganizationEntityRepository : CrudRepository<CustomerOrganizationEntity, UUID> {
}
