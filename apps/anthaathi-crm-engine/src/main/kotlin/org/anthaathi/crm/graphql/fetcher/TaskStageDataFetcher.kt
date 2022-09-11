package org.anthaathi.crm.graphql.fetcher

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import graphql.relay.Connection
import graphql.schema.DataFetchingEnvironment
import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.database.entity.TaskStageEntity
import org.anthaathi.crm.graphql.relay.EntityConnection
import org.anthaathi.crm.services.TaskStageService
import org.anthaathi.crm.types.Task
import org.anthaathi.crm.types.TaskStage
import org.springframework.beans.factory.annotation.Autowired
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext

@DgsComponent
class TaskStageDataFetcher(
    @Autowired val taskStageService: TaskStageService,
    @PersistenceContext private val em: EntityManager
) {

    @DgsData(parentType = DgsConstants.TASK.TYPE_NAME, field = DgsConstants.TASK.TaskStages)
    fun taskStagesForTask(dfe: DataFetchingEnvironment): Connection<TaskStage> {
        val task: Task = dfe.getSource<Task>()

        return EntityConnection(em, TaskStageEntity::class.java, taskStageService.factory)
            .get(dfe)
    }
}
