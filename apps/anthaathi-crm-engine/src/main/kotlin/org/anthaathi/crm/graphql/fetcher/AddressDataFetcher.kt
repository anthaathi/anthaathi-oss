package org.anthaathi.crm.graphql.fetcher

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import graphql.relay.Connection
import graphql.schema.DataFetchingEnvironment
import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.database.entity.AddressEntity
import org.anthaathi.crm.graphql.relay.EntityConnection
import org.anthaathi.crm.services.AddressService
import org.anthaathi.crm.types.Address
import org.anthaathi.crm.types.Customer
import org.springframework.beans.factory.annotation.Autowired
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext

@DgsComponent
class AddressDataFetcher(
    @Autowired val addressService: AddressService,
    @PersistenceContext private val em: EntityManager
) {
    @DgsData(
        parentType = DgsConstants.CUSTOMERORGANIZATIONINFO.TYPE_NAME,
        field = DgsConstants.CUSTOMERORGANIZATIONINFO.Address
    )
    fun customerOrganizationInfoAddress(dfe: DataFetchingEnvironment): Connection<Address> {
        return EntityConnection(em, AddressEntity::class.java, addressService.factory)
            .get(dfe)
    }

    @DgsData(parentType = DgsConstants.CUSTOMER.TYPE_NAME, field = DgsConstants.CUSTOMER.Addresses)
    fun customerAddress(dfe: DataFetchingEnvironment): Connection<Address> {
        val customer: Customer = dfe.getSource<Customer>()

        return EntityConnection(em, AddressEntity::class.java, addressService.factory)
            .get(dfe)
    }
}
