package org.anthaathi.crm.graphql.fetcher

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import graphql.relay.Connection
import graphql.schema.DataFetchingEnvironment
import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.database.entity.TaskEntity
import org.anthaathi.crm.graphql.relay.EntityConnection
import org.anthaathi.crm.services.TaskService
import org.anthaathi.crm.types.Task
import org.springframework.beans.factory.annotation.Autowired
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext


@DgsComponent
class TaskDataFetcher(
    @Autowired val taskService: TaskService,
    @PersistenceContext private val em: EntityManager
) {
    @DgsData(parentType = DgsConstants.STATUS.TYPE_NAME, field = DgsConstants.STATUS.Tasks)
    fun tasks(dfe: DataFetchingEnvironment): Connection<Task> {
        return EntityConnection(em, TaskEntity::class.java, taskService.factory)
            .get(dfe)
    }
}
