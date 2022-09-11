package org.anthaathi.crm.services

import org.anthaathi.crm.database.converter.CustomerOrganizationFactory
import org.anthaathi.crm.database.entity.CustomerOrganizationEntity
import org.springframework.beans.factory.annotation.Autowired

class CustomerOrganizationService(
    @Autowired val customerOrganizationEntity: CustomerOrganizationEntity
) {
    val factory = CustomerOrganizationFactory()

}
