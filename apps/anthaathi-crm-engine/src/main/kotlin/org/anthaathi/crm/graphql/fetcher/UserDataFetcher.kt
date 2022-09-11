package org.anthaathi.crm.graphql.fetcher

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import com.netflix.graphql.dgs.DgsQuery
import graphql.relay.Connection
import graphql.schema.DataFetchingEnvironment
import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.database.entity.UserEntity
import org.anthaathi.crm.graphql.relay.EntityConnection
import org.anthaathi.crm.services.UserService
import org.anthaathi.crm.types.Task
import org.anthaathi.crm.types.User
import org.springframework.beans.factory.annotation.Autowired
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext


@DgsComponent
class UserDataFetcher(
    @Autowired private val userService: UserService,
    @PersistenceContext private val em: EntityManager
) {
    @DgsQuery
    fun me(): User {
        return userService.findById("YW50aGFhdGhpOi8vVXNlci8zNWEyNzRjYi1jMzc1LTQ2MDQtYjc4YS1jN2RmNTQzOWI2YzQ=")!!
    }

    // @DgsData(parentType = DgsConstants.TEAM.TYPE_NAME, field = DgsConstants.TEAM.Assigned) <- "assignedUsers" field not present
    @DgsData(parentType = DgsConstants.TEAM.TYPE_NAME, field = DgsConstants.TEAM.Members)
    fun taskAssignedUsers(dfe: DataFetchingEnvironment): Connection<User> {
        val task: Task = dfe.getSource<Task>()

        return EntityConnection(em, UserEntity::class.java, userService.userFactory)
            .get(dfe)
    }

    // @DgsData(parentType = DgsConstants.TEAM.TYPE_NAME, field = DgsConstants.TEAM.Following) <- "followingUsers" field not present
    fun taskFollowingUsers(dfe: DataFetchingEnvironment): Connection<User> {
        val task: Task = dfe.getSource<Task>()

        return EntityConnection(em, UserEntity::class.java, userService.userFactory)
            .get(dfe)
    }
}
