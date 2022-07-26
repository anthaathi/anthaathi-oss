package org.anthaathi.crm.database.converter

import org.anthaathi.crm.database.entity.CustomerOrganizationEntity
import org.anthaathi.crm.types.CustomerOrganization
import org.anthaathi.crm.utils.IdGenerator

class CustomerOrganizationFactory : ConverterFactory<CustomerOrganization, CustomerOrganizationEntity, Any> {
    override val type: String
        get() = "CustomerOrganization"

    override fun toEntity(input: Any): CustomerOrganizationEntity {
        TODO("Not yet implemented")
    }

    override fun fromEntity(entity: CustomerOrganizationEntity): CustomerOrganization {
        return CustomerOrganization(
            id = IdGenerator.toGlobalId(type, entity.id.toString()),
            role = null,
            createdAt = entity.createdAt!!,
            updatedAt = entity.updatedAt,
            organization = null
        )
    }
}
