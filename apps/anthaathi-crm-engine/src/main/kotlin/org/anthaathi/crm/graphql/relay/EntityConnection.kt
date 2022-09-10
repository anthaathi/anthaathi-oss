package org.anthaathi.crm.graphql.relay

import com.google.gson.Gson
import graphql.relay.*
import graphql.schema.DataFetcher
import graphql.schema.DataFetchingEnvironment
import org.anthaathi.crm.database.interfaces.PagableEntity
import org.anthaathi.crm.json.serializer.OffsetDateTimeConverter
import java.nio.charset.StandardCharsets
import java.time.OffsetDateTime
import java.util.*
import javax.persistence.EntityManager
import javax.persistence.criteria.CriteriaBuilder
import javax.persistence.criteria.CriteriaQuery


class EntityConnection<T>(private val entityManager: EntityManager, private val entity: Class<*>) :
    DataFetcher<Connection<T>> {
    override fun get(environment: DataFetchingEnvironment?): Connection<T> {
        val cb: CriteriaBuilder = entityManager.criteriaBuilder

        val q: CriteriaQuery<PagableEntity> = cb.createQuery(PagableEntity::class.java)

        q.from(entity)

        val edge: Edge<PagableEntity> = DefaultEdge(
            entityManager.createQuery(q).resultList[0],
            DefaultConnectionCursor("")
        )

        val edges = listOf<Edge<T>>()

        val pageInfo = DefaultPageInfo(
            DefaultConnectionCursor(""),
            DefaultConnectionCursor(""),
            false,
            true,
        )

        return DefaultConnection(edges, pageInfo)
    }

    fun createCursor(offset: Int, lastCreatedAt: OffsetDateTime): String? {
        val gson = Gson().newBuilder()
            .registerTypeAdapter(OffsetDateTime::class.java, OffsetDateTimeConverter())
            .create()

        val cursorData = CursorData(
            offset = offset,
            lastCreatedAt = lastCreatedAt,
        )

        val bytes: ByteArray = gson.toJson(cursorData).toByteArray(StandardCharsets.UTF_8)
        return Base64.getEncoder().encodeToString(bytes)
    }
}
