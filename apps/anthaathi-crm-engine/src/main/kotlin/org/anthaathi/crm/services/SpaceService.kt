package org.anthaathi.crm.services

import graphql.relay.Relay
import org.anthaathi.crm.database.converter.fromEntity
import org.anthaathi.crm.database.converter.type
import org.anthaathi.crm.database.repository.SpaceFolderEntityRepository
import org.anthaathi.crm.types.Space
import org.anthaathi.crm.utils.IdGenerator
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.util.*

@Component
class SpaceService(
    @Autowired val spaceFolderEntityRepository: SpaceFolderEntityRepository
) {
    fun findById(id: String): Space? {
        val spaceFolderId = IdGenerator.fromGlobalId(id)
        return findById(spaceFolderId)
    }

    fun findById(resolvedGlobalId: Relay.ResolvedGlobalId): Space? {
        if (Space.type() != resolvedGlobalId.type) {
            return null
        }

        val entity = spaceFolderEntityRepository
            .findById(UUID.fromString(resolvedGlobalId.id))

        if (!entity.isPresent) {
            return null
        }

        return Space.fromEntity(entity.get())
    }
}
