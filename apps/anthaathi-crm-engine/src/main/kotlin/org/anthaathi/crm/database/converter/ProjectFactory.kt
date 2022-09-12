package org.anthaathi.crm.database.converter

import org.anthaathi.crm.database.entity.ProjectEntity
import org.anthaathi.crm.types.Project
import org.anthaathi.crm.utils.IdGenerator

class ProjectFactory : ConverterFactory<Project, ProjectEntity, Any> {
    override val type = "Project"
    override fun toEntity(input: Any): ProjectEntity {
        TODO("Not yet implemented")
    }

    override fun fromEntity(entity: ProjectEntity): Project {
        return Project(
            id = IdGenerator.toGlobalId(type, entity.id.toString()),
            name = entity.title!!,
            spaces = null,
            description = entity.description,
            template = null,
            createdAt = entity.createdAt!!,
            updatedAt = entity.updatedAt,
            handle = entity.handle!!,
        )
    }
}
