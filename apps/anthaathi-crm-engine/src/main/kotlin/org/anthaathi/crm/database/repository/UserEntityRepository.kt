package org.anthaathi.crm.database.repository;

import org.anthaathi.crm.database.entity.UserEntity
import org.springframework.data.repository.CrudRepository
import java.util.*

interface UserEntityRepository : CrudRepository<UserEntity, UUID> {
}
