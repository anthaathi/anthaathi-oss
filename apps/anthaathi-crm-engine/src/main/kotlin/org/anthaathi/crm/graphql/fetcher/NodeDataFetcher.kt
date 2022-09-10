package org.anthaathi.crm.graphql.fetcher

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import graphql.schema.DataFetchingEnvironment
import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.services.*
import org.anthaathi.crm.types.Node
import org.anthaathi.crm.utils.IdGenerator
import org.springframework.beans.factory.annotation.Autowired

@DgsComponent
class NodeDataFetcher(
    @Autowired val organizationService: OrganizationService,
    @Autowired val spaceService: SpaceService,
    @Autowired val taskService: TaskService,
    @Autowired val taskStageService: TaskStageService,
    @Autowired val taskCommentService: TaskCommentService,
    @Autowired val userService: UserService,
    @Autowired val projectService: ProjectService
) {

    @DgsQuery(field = DgsConstants.QUERY.Node)
    fun node(@InputArgument id: String, dfe: DataFetchingEnvironment): Node? {
        val globalId = IdGenerator.fromGlobalId(id)

        when (globalId.type) {
            "Organization" -> return organizationService.findById(globalId)
            "Space" -> return spaceService.findById(globalId)
            "Task" -> return taskService.findById(globalId)
            "TaskStage" -> return taskStageService.findById(globalId)
            "TaskComment" -> return taskCommentService.findById(globalId)
            "User" -> return userService.findById(globalId)
            "Project" -> return projectService.findById(globalId)
        }

        return null
    }
}
