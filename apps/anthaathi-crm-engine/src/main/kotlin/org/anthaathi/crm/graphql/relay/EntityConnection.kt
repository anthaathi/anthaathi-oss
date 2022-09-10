package org.anthaathi.crm.graphql.relay

import graphql.TrivialDataFetcher
import graphql.relay.Connection
import graphql.schema.DataFetcher
import graphql.schema.DataFetchingEnvironment
import java.nio.charset.StandardCharsets
import java.util.*

class EntityConnection<T> : DataFetcher<Connection<T>>,
    TrivialDataFetcher<Connection<T>> {
    override fun get(environment: DataFetchingEnvironment?): Connection<T> {
        TODO("Not yet implemented")
    }

    private fun createCursor(offset: Int): String? {
        val bytes: ByteArray = (offset.toString()).toByteArray(StandardCharsets.UTF_8)
        return Base64.getEncoder().encodeToString(bytes)
    }

}
