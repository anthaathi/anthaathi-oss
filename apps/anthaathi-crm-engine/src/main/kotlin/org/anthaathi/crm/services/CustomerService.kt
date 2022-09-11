package org.anthaathi.crm.services

import org.anthaathi.crm.database.converter.CustomerFactory
import org.anthaathi.crm.database.repository.CustomerEntityRepository
import org.springframework.beans.factory.annotation.Autowired

class CustomerService(
    @Autowired val customerEntityRepository: CustomerEntityRepository
) {
    val factory = CustomerFactory()
}
