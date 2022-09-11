package org.anthaathi.crm.services

import org.anthaathi.crm.database.converter.AddressFactory
import org.anthaathi.crm.database.repository.AddressEntityRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class AddressService(
    @Autowired val addressEntityRepository: AddressEntityRepository
) {
    val factory = AddressFactory()
}
