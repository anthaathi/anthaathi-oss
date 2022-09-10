package org.anthaathi.crm.database.converter

import org.anthaathi.crm.database.entity.ProjectEntity
import org.anthaathi.crm.types.Project
import org.anthaathi.crm.utils.IdGenerator

class ProjectFactory : ConverterFactory<Project, ProjectEntity> {
    override val type = "Project"

    override fun fromEntity(entity: ProjectEntity): Project {
        return Project(
            id = IdGenerator.toGlobalId(type, entity.id.toString()),
            name = entity.title!!,
            description = entity.description,
            createdAt = entity.createdAt!!,
            updatedAt = entity.updatedAt,
        )
    }
}
