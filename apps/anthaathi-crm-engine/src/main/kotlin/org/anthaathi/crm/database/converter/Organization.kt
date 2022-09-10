package org.anthaathi.crm.database.converter

import org.anthaathi.crm.database.entity.OrganizationEntity
import org.anthaathi.crm.types.Organization
import org.anthaathi.crm.utils.IdGenerator


fun Organization.Companion.type(): String {
    return "Organization"
}

fun Organization.Companion.fromEntity(userEntity: OrganizationEntity): Organization {
    return Organization(
        id = IdGenerator.toGlobalId(Organization.type(), userEntity.id.toString()),
        name = userEntity.name!!,
        createdAt = userEntity.createdAt!!,
        updatedAt = userEntity.updatedAt,
    )
}
