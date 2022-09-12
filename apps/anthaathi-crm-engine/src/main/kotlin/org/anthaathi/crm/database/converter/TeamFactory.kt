package org.anthaathi.crm.database.converter

import org.anthaathi.crm.database.entity.TeamEntity
import org.anthaathi.crm.types.Team
import org.anthaathi.crm.utils.IdGenerator

class TeamFactory : ConverterFactory<Team, TeamEntity, Any> {
    override val type = "Team"

    override fun toEntity(input: Any): TeamEntity {
        TODO("Not yet implemented")
    }

    override fun fromEntity(entity: TeamEntity): Team {
        return Team(
            id = IdGenerator.toGlobalId(type, entity.id.toString()),
            name = entity.name!!,
            description = entity.description,
            teams = null,
            members = null,
            createdAt = entity.createdAt!!,
            updatedAt = entity.updatedAt,
        )
    }
}
