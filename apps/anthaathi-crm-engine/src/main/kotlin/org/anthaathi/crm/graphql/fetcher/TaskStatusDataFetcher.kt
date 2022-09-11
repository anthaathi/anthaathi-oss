package org.anthaathi.crm.graphql.fetcher

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import graphql.relay.Connection
import graphql.schema.DataFetchingEnvironment
import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.database.entity.StatusEntity
import org.anthaathi.crm.graphql.relay.EntityConnection
import org.anthaathi.crm.services.StatusService
import org.anthaathi.crm.types.Status
import org.springframework.beans.factory.annotation.Autowired
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext

@DgsComponent
class TaskStatusDataFetcher(
    @PersistenceContext private val em: EntityManager,
    @Autowired private val statusService: StatusService,
) {
    @DgsData(parentType = DgsConstants.SPACE.TYPE_NAME, field = DgsConstants.SPACE.TasksByStatuses)
    fun tasksByStatuses(dfe: DataFetchingEnvironment): Connection<Status> {
        return EntityConnection(em, StatusEntity::class.java, statusService.factory)
            .get(dfe)
    }
}
