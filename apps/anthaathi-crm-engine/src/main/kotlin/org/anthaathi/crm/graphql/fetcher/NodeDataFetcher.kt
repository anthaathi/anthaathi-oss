package org.anthaathi.crm.graphql.fetcher

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import graphql.schema.DataFetchingEnvironment
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
    @Autowired val projectService: ProjectService,
    @Autowired val addressService: AddressService,
    @Autowired val customerOrganizationService: CustomerOrganizationService,
    @Autowired val customerService: CustomerService,
    @Autowired val documentService: DocumentService,
    @Autowired val taskTagService: TaskTagService,
    @Autowired val teamService: TeamService
) {

    @DgsQuery
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
            "Address" -> return addressService.findById(globalId)
            "CustomerOrganization" -> return customerOrganizationService.findById(globalId)
            "Customer" -> return customerService.findById(globalId)
            "Document" -> return documentService.findById(globalId)
            "TaskTag" -> return taskTagService.findById(globalId)
            "Team" -> return teamService.findById(globalId)
        }

        return null
    }
}
