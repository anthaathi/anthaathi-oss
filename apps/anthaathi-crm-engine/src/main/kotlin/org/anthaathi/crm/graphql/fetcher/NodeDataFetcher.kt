package org.anthaathi.crm.graphql.fetcher

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsQuery
import com.netflix.graphql.dgs.InputArgument
import graphql.schema.DataFetchingEnvironment
import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.mock.Generator
import org.anthaathi.crm.types.Node
import org.anthaathi.crm.types.User
import org.anthaathi.crm.utils.IdGenerator

@DgsComponent
class NodeDataFetcher {
    @DgsQuery(field = DgsConstants.QUERY.Node)
    fun node(@InputArgument id: String, dfe: DataFetchingEnvironment): Node? {
        val globalId = IdGenerator.fromGlobalId(id)

        when (globalId.type) {
            "Organization" -> return Generator.createOrganization(dfe)?.edges?.get(0)?.node
            "Space" -> return Generator.createSpace(dfe)?.edges?.get(0)?.node
            "Task" -> return Generator.createTask(dfe)?.edges?.get(0)?.node
            "TaskStage" -> return Generator.createTaskStages(dfe)?.edges?.get(0)?.node
            "TaskComment" -> return Generator.createComments(dfe)?.edges?.get(0)?.node
            "User" -> return Generator.createUser(dfe)?.edges?.get(0)?.node
            "Project" -> return Generator.createProject(dfe)?.edges?.get(0)?.node
        }

        return null
    }
}
