package org.anthaathi.crm.services

import org.anthaathi.crm.database.converter.DocumentFactory
import org.anthaathi.crm.database.repository.CustomerDocumentEntityRepository
import org.springframework.beans.factory.annotation.Autowired

class DocumentService(
    @Autowired val documentEntityRepository: CustomerDocumentEntityRepository
) {
    val factory = DocumentFactory()
}
