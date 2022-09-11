package org.anthaathi.crm.services

import org.anthaathi.crm.database.converter.TaskTagFactory
import org.anthaathi.crm.database.repository.TaskTagEntityRepository
import org.springframework.beans.factory.annotation.Autowired

class TaskTagService(
    @Autowired val taskTagEntityRepository: TaskTagEntityRepository
) {
    val factory = TaskTagFactory()
}
