package org.anthaathi.crm.database.converter

import org.anthaathi.crm.database.entity.AddressEntity
import org.anthaathi.crm.types.Address
import org.anthaathi.crm.utils.IdGenerator

class AddressFactory: ConverterFactory<Address, AddressEntity> {
    override val type: String
        get() = "Address"

    override fun fromEntity(entity: AddressEntity): Address {
        return Address(
            id = IdGenerator.toGlobalId(type, entity.id.toString()),
            type = entity.type,
            addressLine1 = entity.addressLine1,
            addressLine2 = entity.addressLine2,
            addressLine3 = entity.addressLine3,
            city = entity.city,
            state = entity.state,
            country = entity.country,
            postalCode = entity.postalCode,
            createdAt = entity.createdAt!!,
            updatedAt = entity.updatedAt
        )
    }
}
