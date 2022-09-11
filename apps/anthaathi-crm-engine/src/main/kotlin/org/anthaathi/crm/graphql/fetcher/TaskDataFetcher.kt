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
import org.anthaathi.crm.types.TaskByStatus
import org.springframework.beans.factory.annotation.Autowired
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext


@DgsComponent
class TaskDataFetcher(
    @Autowired val taskService: TaskService,
    @PersistenceContext private val em: EntityManager
) {
    @DgsData(parentType = DgsConstants.TASKBYSTATUS.TYPE_NAME, field = DgsConstants.TASKBYSTATUS.Tasks)
    fun taskForTaskByStatus(dfe: DataFetchingEnvironment): Connection<Task> {
        val taskByStatus: TaskByStatus = dfe.getSource<TaskByStatus>()

        return EntityConnection(em, TaskEntity::class.java, taskService.factory)
            .get(dfe)
    }
}
