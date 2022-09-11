package org.anthaathi.crm.database.converter

import org.anthaathi.crm.database.entity.SpaceFolderEntity
import org.anthaathi.crm.types.Space
import org.anthaathi.crm.utils.IdGenerator

class SpaceFactory: ConverterFactory<Space, SpaceFolderEntity> {
    override val type: String
        get() = "Space"

    override fun fromEntity(entity: SpaceFolderEntity): Space {
        return Space(
            id = IdGenerator.toGlobalId(type, entity.id.toString()),
            name = entity.name!!,
            spaces = null,
            tasks = null,
            templates = null,
            tasksByStatuses = null,
            createdAt = entity.createdAt!!,
            updatedAt = entity.updatedAt
        )
    }
}
