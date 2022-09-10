package org.anthaathi.crm.database.interfaces

import java.time.OffsetDateTime
import javax.persistence.Column

interface PagableEntity {
    var createdAt: OffsetDateTime?

    var cursorId: Long?

    companion object {
        fun gqlType(): String {
            return "";
        }
    }
}
