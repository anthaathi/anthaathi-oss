package org.anthaathi.crm.graphql.fetcher

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import graphql.schema.DataFetchingEnvironment
import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.services.OrganizationService
import org.anthaathi.crm.types.Organization
import org.anthaathi.crm.types.User
import org.springframework.beans.factory.annotation.Autowired

@DgsComponent
class OrganizationFetcher(
    @Autowired val organizationService: OrganizationService
) {
    @DgsData(parentType = DgsConstants.USER.TYPE_NAME, field = DgsConstants.USER.DefaultOrganization)
    fun getOrganization(dfe: DataFetchingEnvironment): Organization? {
        val user = dfe.getSource<User>()
        println(user.id)
        return this.organizationService.findById("YW50aGFhdGhpOi8vT3JnYW5pemF0aW9uLzM1YTI3NGNiLWMzNzUtNDYwNC1iNzhhLWM3ZGY1NDM5YjZjNA==")
    }
}
