package org.anthaathi.crm.database.converter

import org.anthaathi.crm.database.entity.DocumentEntity
import org.anthaathi.crm.types.Document
import org.anthaathi.crm.utils.IdGenerator
import java.time.OffsetTime
import org.anthaathi.crm.database.entity.DocumentEntity as DocumentEntity1

class DocumentFactory: ConverterFactory<Document, DocumentEntity1> {
    override val type: String
        get() = "Document"

    override fun fromEntity(entity: DocumentEntity): Document {
        return Document(
            id = IdGenerator.toGlobalId(type, entity.id.toString()),
            title = entity.title!!,
            expiry = entity.expiry?.atTime(OffsetTime.now()),
            url = null,
            createdAt = entity.createdAt!!,
            updatedAt = entity.updatedAt
        )
    }
}
