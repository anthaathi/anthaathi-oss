package org.anthaathi.crm.graphql.fetcher

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import graphql.schema.DataFetchingEnvironment
import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.mock.Generator
import org.anthaathi.crm.services.OrganizationService
import org.anthaathi.crm.services.UserService
import org.anthaathi.crm.types.Node
import org.anthaathi.crm.types.User
import org.anthaathi.crm.utils.IdGenerator
import org.springframework.beans.factory.annotation.Autowired

@DgsComponent
class NodeDataFetcher(
    @Autowired val userService: UserService,
    @Autowired val organizationService: OrganizationService,
) {

    @DgsQuery(field = DgsConstants.QUERY.Node)
    fun node(@InputArgument id: String, dfe: DataFetchingEnvironment): Node? {
        val globalId = IdGenerator.fromGlobalId(id)

        when (globalId.type) {
            "Organization" -> return organizationService.findById(globalId)
            "Space" -> return Generator.createSpace(dfe)?.edges?.get(0)?.node
            "Task" -> return Generator.createTask(dfe)?.edges?.get(0)?.node
            "TaskStage" -> return Generator.createTaskStages(dfe)?.edges?.get(0)?.node
            "TaskComment" -> return Generator.createComments(dfe)?.edges?.get(0)?.node
            "User" -> return userService.findById(globalId)
            "Project" -> return Generator.createProject(dfe)?.edges?.get(0)?.node
        }

        return null
    }
}
