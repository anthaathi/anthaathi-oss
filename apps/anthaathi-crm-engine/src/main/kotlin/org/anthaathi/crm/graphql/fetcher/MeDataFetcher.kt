package org.anthaathi.crm.graphql.fetcher

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsDataFetchingEnvironment
import com.netflix.graphql.dgs.DgsQuery
import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.mock.Generator.Companion.createOrganization
import org.anthaathi.crm.mock.Generator.Companion.createUser
import org.anthaathi.crm.types.User

@DgsComponent
class MeDataFetcher {
    @DgsQuery(field = DgsConstants.QUERY.Me)
    fun me(
         dfe: DgsDataFetchingEnvironment
    ): User? {
        return createUser(dfe, organization = createOrganization(dfe))?.edges?.get(0)?.node
    }
}
