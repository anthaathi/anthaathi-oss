package org.anthaathi.crm.services

import graphql.relay.Relay
import org.anthaathi.crm.database.converter.CustomerFactory
import org.anthaathi.crm.database.repository.CustomerEntityRepository
import org.anthaathi.crm.types.Customer
import org.anthaathi.crm.utils.IdGenerator
import org.springframework.beans.factory.annotation.Autowired
import java.util.*

class CustomerService(
    @Autowired val customerEntityRepository: CustomerEntityRepository
) {
    val factory = CustomerFactory()
    fun findById(id: String): Customer? {
        val customerId = IdGenerator.fromGlobalId(id)
        return findById(customerId)
    }

    fun findById(resolvedGlobalId: Relay.ResolvedGlobalId): Customer? {
        if (factory.type != resolvedGlobalId.type) {
            return null
        }

        val entity = customerEntityRepository
            .findById(UUID.fromString(resolvedGlobalId.id))

        if (!entity.isPresent) {
            return null
        }

        return factory.fromEntity(entity.get())
    }
}
