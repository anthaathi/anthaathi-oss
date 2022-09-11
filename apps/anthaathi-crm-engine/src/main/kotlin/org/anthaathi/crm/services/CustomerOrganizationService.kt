package org.anthaathi.crm.services

import graphql.relay.Relay
import org.anthaathi.crm.database.converter.CustomerOrganizationFactory
import org.anthaathi.crm.database.repository.CustomerOrganizationEntityRepository
import org.anthaathi.crm.types.CustomerOrganization
import org.anthaathi.crm.utils.IdGenerator
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.util.*

@Component
class CustomerOrganizationService(
    @Autowired val customerOrganizationEntityRepository: CustomerOrganizationEntityRepository
) {
    val factory = CustomerOrganizationFactory()
    fun findById(id: String): CustomerOrganization? {
        val customerOrganizationId = IdGenerator.fromGlobalId(id)
        return findById(customerOrganizationId)
    }

    fun findById(resolvedGlobalId: Relay.ResolvedGlobalId): CustomerOrganization? {
        if (factory.type != resolvedGlobalId.type) {
            return null
        }

        val entity = customerOrganizationEntityRepository
            .findById(UUID.fromString(resolvedGlobalId.id))

        if (!entity.isPresent) {
            return null
        }

        return factory.fromEntity(entity.get())
    }

}
