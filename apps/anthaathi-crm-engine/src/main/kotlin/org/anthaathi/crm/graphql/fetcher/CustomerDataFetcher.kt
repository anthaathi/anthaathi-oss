package org.anthaathi.crm.graphql.fetcher

import com.netflix.graphql.dgs.DgsComponent
import org.anthaathi.crm.services.CustomerService
import org.springframework.beans.factory.annotation.Autowired
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext

@DgsComponent
class CustomerDataFetcher(
    @Autowired val customerService: CustomerService,
    @PersistenceContext private val em: EntityManager
) {

}
