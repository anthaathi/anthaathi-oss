package org.anthaathi.crm.services

import graphql.relay.Relay.ResolvedGlobalId
import org.anthaathi.crm.database.converter.fromEntity
import org.anthaathi.crm.database.converter.type
import org.anthaathi.crm.database.repository.UserEntityRepository
import org.anthaathi.crm.types.User
import org.anthaathi.crm.utils.IdGenerator
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.util.*

@Component
class UserService(@Autowired val userEntityRepository: UserEntityRepository) {
    fun findById(id: String): User? {
        val userId = IdGenerator.fromGlobalId(id)
        return findById(userId)
    }

    fun findById(id: ResolvedGlobalId): User? {
        if (User.type() != id.type) {
            return null
        }

        val entity = userEntityRepository
            .findById(UUID.fromString(id.id))
            .get()

        return User.fromEntity(entity)
    }
}
