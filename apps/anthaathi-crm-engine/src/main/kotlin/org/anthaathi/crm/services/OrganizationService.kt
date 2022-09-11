package org.anthaathi.crm.services

import graphql.relay.Relay.ResolvedGlobalId
import org.anthaathi.crm.database.converter.OrganizationFactory
import org.anthaathi.crm.database.converter.fromEntity
import org.anthaathi.crm.database.repository.OrganizationEntityRepository
import org.anthaathi.crm.types.Organization
import org.anthaathi.crm.utils.IdGenerator
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.util.*


@Component
class OrganizationService(
    @Autowired val organizationEntityRepository: OrganizationEntityRepository,
) {
    val factory = OrganizationFactory()
    fun findById(id: String): Organization? {
        val organizationId = IdGenerator.fromGlobalId(id)
        return findById(organizationId)
    }

        fun findById(resolvedGlobalId: ResolvedGlobalId): Organization? {
        if (factory.type != resolvedGlobalId.type) {
            return null
        }

        val entity = organizationEntityRepository
            .findById(UUID.fromString(resolvedGlobalId.id))

        if (!entity.isPresent) {
            return null
        }

        return Organization.fromEntity(entity.get())
    }
}
