package org.anthaathi.crm.graphql.fetcher

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.services.UserService
import org.anthaathi.crm.types.User
import org.springframework.beans.factory.annotation.Autowired


@DgsComponent
class UserFetcher(@Autowired val userService: UserService) {
    @DgsData(parentType = DgsConstants.QUERY_TYPE, field = DgsConstants.QUERY.Me)
    fun me(): User {
        return userService.findById("YW50aGFhdGhpOi8vVXNlci8wNzVmYmFhMC02MGUwLTQwZjctODJjMi0xZGI1ZWFhODJmM2U=")!!
    }
}
