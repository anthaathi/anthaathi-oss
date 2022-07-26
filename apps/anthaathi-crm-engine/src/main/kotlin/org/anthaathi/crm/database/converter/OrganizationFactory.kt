package org.anthaathi.crm.database.converter

import org.anthaathi.crm.database.entity.OrganizationEntity
import org.anthaathi.crm.types.Organization
import org.anthaathi.crm.utils.IdGenerator

class OrganizationFactory : ConverterFactory<Organization, OrganizationEntity, Any> {
    override val type: String
        get() = "Organization"

    override fun toEntity(input: Any): OrganizationEntity {
        TODO("Not yet implemented")
    }

    override fun fromEntity(entity: OrganizationEntity): Organization {
        return Organization(
            id = IdGenerator.toGlobalId(type, entity.id.toString()),
            name = entity.name!!,
            createdAt = entity.createdAt!!,
            updatedAt = entity.updatedAt,
        )
    }
}
