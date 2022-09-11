package org.anthaathi.crm.database.repository

import org.anthaathi.crm.database.entity.UserEntity
import org.springframework.data.repository.PagingAndSortingRepository
import java.util.*

interface UserEntityRepository : PagingAndSortingRepository<UserEntity, UUID>
