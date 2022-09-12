package org.anthaathi.crm.services

import org.anthaathi.crm.database.converter.StatusFactory
import org.springframework.stereotype.Component

@Component
class StatusService {
    val factory = StatusFactory()
}
