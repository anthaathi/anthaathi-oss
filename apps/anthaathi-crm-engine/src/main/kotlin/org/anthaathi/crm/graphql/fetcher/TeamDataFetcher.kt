package org.anthaathi.crm.graphql.fetcher

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import graphql.relay.Connection
import graphql.schema.DataFetchingEnvironment
import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.database.entity.TeamEntity
import org.anthaathi.crm.graphql.relay.EntityConnection
import org.anthaathi.crm.services.TeamService
import org.anthaathi.crm.types.Team
import org.springframework.beans.factory.annotation.Autowired
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext

@DgsComponent
class TeamDataFetcher(
    @Autowired private val teamService: TeamService,
    @PersistenceContext private val em: EntityManager
) {
    @DgsData(parentType = DgsConstants.ORGANIZATION.TYPE_NAME, field = DgsConstants.ORGANIZATION.Teams)
    fun teamsForOrganization(dfe: DataFetchingEnvironment): Connection<Team> {
        return EntityConnection(em, TeamEntity::class.java, teamService.teamFactory)
            .get(dfe)
    }
}
