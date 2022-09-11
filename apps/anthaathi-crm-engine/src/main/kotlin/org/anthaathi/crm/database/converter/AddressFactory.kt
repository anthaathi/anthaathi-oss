package org.anthaathi.crm.database.converter

import org.anthaathi.crm.database.entity.AddressEntity
import org.anthaathi.crm.types.Address
import org.anthaathi.crm.utils.IdGenerator

class AddressFactory: ConverterFactory<Address, AddressEntity> {
    override val type: String
        get() = "Address"

    override fun fromEntity(entity: AddressEntity): Address {
        // TODO: Create proper mapping
        return Address(
            id = IdGenerator.toGlobalId(type, entity.id.toString()),
            createdAt = entity.createdAt!!,
        )
    }
}
