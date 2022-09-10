package org.anthaathi.crm.services

import graphql.relay.Relay
import org.anthaathi.crm.database.converter.TeamFactory
import org.anthaathi.crm.database.converter.type
import org.anthaathi.crm.database.repository.TeamEntityRepository
import org.anthaathi.crm.types.TaskStage
import org.anthaathi.crm.types.Team
import org.anthaathi.crm.utils.IdGenerator
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.util.*

@Component
class TeamService(
    @Autowired val
     teamEntityRepository: TeamEntityRepository
) {
    val teamFactory = TeamFactory()

    fun findById(id: String): Team? {
        val taskStageId = IdGenerator.fromGlobalId(id)
        return findById(taskStageId)
    }

    fun findById(resolvedGlobalId: Relay.ResolvedGlobalId): Team? {
        if (TaskStage.type() != resolvedGlobalId.type) {
            return null
        }

        val entity = teamEntityRepository
            .findById(UUID.fromString(resolvedGlobalId.id))

        if (!entity.isPresent) {
            return null
        }

        return teamFactory.fromEntity(entity.get())
    }
}
