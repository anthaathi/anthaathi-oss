package org.anthaathi.crm.graphql.fetcher

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import graphql.relay.Connection
import graphql.schema.DataFetchingEnvironment
import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.database.entity.CustomerOrganizationEntity
import org.anthaathi.crm.graphql.relay.EntityConnection
import org.anthaathi.crm.services.CustomerOrganizationService
import org.anthaathi.crm.types.Customer
import org.anthaathi.crm.types.CustomerOrganization
import org.springframework.beans.factory.annotation.Autowired
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext

@DgsComponent
class CustomerOrganizationDataFetcher(
    @Autowired val customerOrganizationService: CustomerOrganizationService,
    @PersistenceContext private val em: EntityManager
) {
    @DgsData(parentType = DgsConstants.CUSTOMER.TYPE_NAME, field = DgsConstants.CUSTOMER.Organizations)
    fun customerOrganizations(dfe: DataFetchingEnvironment): Connection<CustomerOrganization> {
        val customer: Customer = dfe.getSource<Customer>()
        return EntityConnection(em, CustomerOrganizationEntity::class.java, customerOrganizationService.factory)
            .get(dfe)
    }
}
