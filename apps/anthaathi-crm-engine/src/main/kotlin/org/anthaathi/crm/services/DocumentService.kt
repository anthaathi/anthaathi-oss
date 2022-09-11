package org.anthaathi.crm.services

import graphql.relay.Relay
import org.anthaathi.crm.database.converter.DocumentFactory
import org.anthaathi.crm.database.repository.DocumentEntityRepository
import org.anthaathi.crm.types.Document
import org.anthaathi.crm.utils.IdGenerator
import org.springframework.beans.factory.annotation.Autowired
import java.util.*

class DocumentService(
    @Autowired val documentEntityRepository: DocumentEntityRepository
) {
    val factory = DocumentFactory()
    fun findById(id: String): Document? {
        val documentId = IdGenerator.fromGlobalId(id)
        return findById(documentId)
    }

    fun findById(resolvedGlobalId: Relay.ResolvedGlobalId): Document? {
        if (factory.type != resolvedGlobalId.type) {
            return null
        }

        val entity = documentEntityRepository
            .findById(UUID.fromString(resolvedGlobalId.id))

        if (!entity.isPresent) {
            return null
        }

        return factory.fromEntity(entity.get())
    }
}
