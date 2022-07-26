package org.anthaathi.crm.database.interfaces

import java.time.OffsetDateTime

interface PagableEntity {
    var createdAt: OffsetDateTime?

    var cursorId: Long?

    companion object {
        fun gqlType(): String {
            return ""
        }
    }
}
