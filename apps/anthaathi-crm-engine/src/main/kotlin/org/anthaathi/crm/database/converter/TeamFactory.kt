package org.anthaathi.crm.database.converter

import org.anthaathi.crm.database.entity.TeamEntity
import org.anthaathi.crm.types.Team
import org.anthaathi.crm.utils.IdGenerator

class TeamFactory : ConverterFactory<Team, TeamEntity> {
    override val type = "Team"

    override fun fromEntity(entity: TeamEntity): Team {
        return Team(
            id = IdGenerator.toGlobalId(type, entity.id.toString()),
            name = entity.name!!,
            description = entity.description,
            createdAt = entity.createdAt!!,
            updatedAt = entity.updatedAt,
        )
    }
}
