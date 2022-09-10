package org.anthaathi.crm.database.converter

import org.anthaathi.crm.database.entity.ProjectEntity
import org.anthaathi.crm.types.Project
import org.anthaathi.crm.utils.IdGenerator

fun Project.Companion.type(): String {
    return "Project"
}

fun Project.Companion.fromEntity(projectEntity: ProjectEntity): Project {
    return Project(
        id = IdGenerator.toGlobalId(Project.type(), projectEntity.id.toString()),
        name = projectEntity.title!!,
        description = projectEntity.description,
        createdAt = projectEntity.createdAt!!,
        updatedAt = projectEntity.updatedAt,
    )
}
