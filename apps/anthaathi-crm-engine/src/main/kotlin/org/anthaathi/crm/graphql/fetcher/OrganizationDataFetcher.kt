package org.anthaathi.crm.graphql.fetcher

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import graphql.relay.Connection
import graphql.schema.DataFetchingEnvironment
import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.database.entity.OrganizationEntity
import org.anthaathi.crm.graphql.relay.EntityConnection
import org.anthaathi.crm.services.OrganizationService
import org.anthaathi.crm.types.Organization
import org.anthaathi.crm.types.User
import org.springframework.beans.factory.annotation.Autowired
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext

@DgsComponent
class OrganizationDataFetcher(
    @Autowired val organizationService: OrganizationService,
    @PersistenceContext private val em: EntityManager
) {
    @DgsData(parentType = DgsConstants.USER.TYPE_NAME, field = DgsConstants.USER.DefaultOrganization)
    fun userDefaultOrganization(dfe: DataFetchingEnvironment): Organization? {
        return this.organizationService.findById("YW50aGFhdGhpOi8vT3JnYW5pemF0aW9uLzM1YTI3NGNiLWMzNzUtNDYwNC1iNzhhLWM3ZGY1NDM5YjZjNA==")
    }
    @DgsData(parentType = DgsConstants.USER.TYPE_NAME, field = DgsConstants.USER.Organizations)
    fun userOrganizations(dfe: DataFetchingEnvironment): Connection<Organization> {
        val user: User = dfe.getSource<User>()

        return EntityConnection(em, OrganizationEntity::class.java, organizationService.factory)
            .get(dfe)
    }
}
