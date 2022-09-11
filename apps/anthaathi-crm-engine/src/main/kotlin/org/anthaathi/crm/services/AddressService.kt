package org.anthaathi.crm.services

import graphql.relay.Relay
import org.anthaathi.crm.database.converter.AddressFactory
import org.anthaathi.crm.database.repository.AddressEntityRepository
import org.anthaathi.crm.types.Address
import org.anthaathi.crm.utils.IdGenerator
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.util.*

@Service
class AddressService(
    @Autowired val addressEntityRepository: AddressEntityRepository
) {
    val factory = AddressFactory()
    fun findById(id: String): Address? {
        val addressId = IdGenerator.fromGlobalId(id)
        return findById(addressId)
    }

    fun findById(resolvedGlobalId: Relay.ResolvedGlobalId): Address? {
        if (factory.type != resolvedGlobalId.type) {
            return null
        }

        val entity = addressEntityRepository
            .findById(UUID.fromString(resolvedGlobalId.id))

        if (!entity.isPresent) {
            return null
        }

        return factory.fromEntity(entity.get())
    }
}
