package org.anthaathi.crm.graphql.relay

import com.fasterxml.jackson.annotation.JsonProperty
import java.time.OffsetDateTime

data class CursorData(
    @JsonProperty
    val offset: Int,
    @JsonProperty
    val lastCreatedAt: OffsetDateTime,
)
