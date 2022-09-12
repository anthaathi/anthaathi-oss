package org.anthaathi.crm.graphql.fetcher

import com.fasterxml.jackson.databind.ObjectMapper
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import graphql.schema.DataFetchingEnvironment
import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.services.TaskService
import org.anthaathi.crm.types.CreateTaskInput
import org.anthaathi.crm.types.CreateTaskResponse
import org.springframework.beans.factory.annotation.Autowired
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext

@DgsComponent
class TaskMutationDataFetcher(
    @Autowired val taskService: TaskService,
    @PersistenceContext private val em: EntityManager
) {

    @DgsData(parentType = DgsConstants.MUTATION.TYPE_NAME, field = DgsConstants.MUTATION.CreateTask)
    fun createTask(dfe: DataFetchingEnvironment): CreateTaskResponse {
        val arguments: Map<String, Object> = dfe.arguments as Map<String, Object>
        val taskInput: CreateTaskInput = ObjectMapper().convertValue(arguments, CreateTaskInput::class.java)

        return taskService.createTask(taskInput)
    }
}
