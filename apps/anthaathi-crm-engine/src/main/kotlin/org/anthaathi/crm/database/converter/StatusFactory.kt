package org.anthaathi.crm.database.converter

import org.anthaathi.crm.database.entity.StatusEntity
import org.anthaathi.crm.types.Status
import org.anthaathi.crm.utils.IdGenerator

class StatusFactory : ConverterFactory<Status, StatusEntity> {
    override val type: String
        get() = "TaskStatus"

    override fun fromEntity(entity: StatusEntity): Status {
        return Status(
            id = IdGenerator.toGlobalId(type, entity.id.toString()),
            name = entity.name!!,
            color = entity.color,
            createdAt = entity.createdAt!!,
            updatedAt = entity.updatedAt,
        )
    }
}
