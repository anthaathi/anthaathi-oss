package org.anthaathi.crm.database.converter

import org.anthaathi.crm.database.entity.SpaceFolderEntity
import org.anthaathi.crm.types.Space
import org.anthaathi.crm.utils.IdGenerator

fun Space.Companion.type(): String {
    return "Space"
}

fun Space.Companion.fromEntity(userEntity: SpaceFolderEntity): Space {
    return Space(
        id = IdGenerator.toGlobalId(type(), userEntity.id.toString()),
        name = userEntity.name!!,
        createdAt = userEntity.createdAt!!,
        updatedAt = userEntity.updatedAt,
    )
}
