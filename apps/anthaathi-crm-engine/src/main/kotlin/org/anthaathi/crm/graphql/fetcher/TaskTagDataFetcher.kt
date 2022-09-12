package org.anthaathi.crm.graphql.fetcher

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import graphql.relay.Connection
import graphql.schema.DataFetchingEnvironment
import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.database.entity.TaskTagEntity
import org.anthaathi.crm.graphql.relay.EntityConnection
import org.anthaathi.crm.services.TaskTagService
import org.anthaathi.crm.types.Task
import org.anthaathi.crm.types.TaskTag
import org.springframework.beans.factory.annotation.Autowired
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext

@DgsComponent
class TaskTagDataFetcher(
    @Autowired val taskTagService: TaskTagService,
    @PersistenceContext private val em: EntityManager
) {
    @DgsData(parentType = DgsConstants.TASK.TYPE_NAME, field = DgsConstants.TASK.Tag)
    fun taskTagsForTask(dfe: DataFetchingEnvironment): Connection<TaskTag> {
        val task: Task = dfe.getSource<Task>()

        return EntityConnection(em, TaskTagEntity::class.java, taskTagService.factory)
            .get(dfe)
    }
}
