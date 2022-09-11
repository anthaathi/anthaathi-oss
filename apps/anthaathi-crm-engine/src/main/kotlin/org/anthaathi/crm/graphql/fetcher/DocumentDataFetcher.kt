package org.anthaathi.crm.graphql.fetcher

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import graphql.relay.Connection
import graphql.schema.DataFetchingEnvironment
import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.database.entity.DocumentEntity
import org.anthaathi.crm.graphql.relay.EntityConnection
import org.anthaathi.crm.services.DocumentService
import org.anthaathi.crm.types.Customer
import org.anthaathi.crm.types.Document
import org.anthaathi.crm.types.TaskStage
import org.springframework.beans.factory.annotation.Autowired
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext

@DgsComponent
class DocumentDataFetcher(
    @Autowired val documentService: DocumentService,
    @PersistenceContext private val em: EntityManager
) {
    @DgsData(parentType = DgsConstants.CUSTOMER.TYPE_NAME, field = DgsConstants.CUSTOMER.Documents)
    fun customerDocuments(dfe: DataFetchingEnvironment): Connection<Document> {
        val customer: Customer = dfe.getSource<Customer>()

        return EntityConnection(em, DocumentEntity::class.java, documentService.factory)
            .get(dfe)
    }

    @DgsData(parentType = DgsConstants.TASKSTAGE.TYPE_NAME, field = DgsConstants.TASKSTAGE.Documents)
    fun taskStageDocuments(dfe: DataFetchingEnvironment): Connection<Document> {
        val taskStage: TaskStage = dfe.getSource<TaskStage>()

        return EntityConnection(em, DocumentEntity::class.java, documentService.factory)
            .get(dfe)
    }
}
