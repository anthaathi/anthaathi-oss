package org.anthaathi.crm.graphql.relay

import com.google.gson.Gson
import graphql.relay.*
import graphql.schema.DataFetcher
import graphql.schema.DataFetchingEnvironment
import org.anthaathi.crm.database.converter.ConverterFactory
import org.anthaathi.crm.database.interfaces.PagableEntity
import org.anthaathi.crm.json.serializer.OffsetDateTimeConverter
import java.nio.charset.StandardCharsets
import java.time.OffsetDateTime
import java.util.*
import javax.persistence.EntityManager
import javax.persistence.TypedQuery
import javax.persistence.criteria.CriteriaBuilder
import javax.persistence.criteria.CriteriaQuery


class EntityConnection<T, U : PagableEntity>(
    private val entityManager: EntityManager,
    private val entity: Class<U>,
    private val factory: ConverterFactory<T, U, *>,
) : DataFetcher<Connection<T>> {
    override fun get(environment: DataFetchingEnvironment?): Connection<T> {
        val edges = buildEdges(environment)

        val pageInfo = if (edges.isEmpty()) {
            DefaultPageInfo(
                null,
                null,
                false,
                false,
            )
        } else {
            DefaultPageInfo(
                edges.first().cursor,
                edges.last().cursor,
                environment?.getArgument<String?>("after") != null,
                true,
            )
        }

        return DefaultConnection(edges, pageInfo)
    }

    private fun buildEdges(environment: DataFetchingEnvironment?): List<Edge<T>> {
        val cb: CriteriaBuilder = entityManager.criteriaBuilder
        val cq: CriteriaQuery<PagableEntity> = cb.createQuery(PagableEntity::class.java)
        val rootEntry = cq.from(entity)

        val first = environment?.getArgument<Int?>("first")
        val last = environment?.getArgument<Int?>("last")

        val before = environment?.getArgument<String?>("before")
        val after = environment?.getArgument<String?>("after")

        val order = if ((first != null && last == null)) {
            listOf(
                cb.asc(rootEntry.get<PagableEntity>("createdAt")),
                cb.asc(rootEntry.get<PagableEntity>("cursorId")),
            )
        } else if (first == null && last != null) {
            listOf(
                cb.desc(rootEntry.get<PagableEntity>("createdAt")),
                cb.desc(rootEntry.get<PagableEntity>("cursorId")),
            )
        } else {
            throw Error("You have to choose first or last not both")
        }

        val all: CriteriaQuery<*> = cq.select(rootEntry).orderBy(order).let {
            if (before != null || after != null) {
                val result = if (before != null) {
                    decodeCursor(before)
                } else if (after != null) {
                    decodeCursor(after)
                } else {
                    throw Error("Will never execute")
                }
                if (result != null) {
                    return@let it.where(
                        cb.gt(
                            rootEntry.get("cursorId"),
                            result.id
                        )
                    )
                }
            }

            it
        }

        val limit = first ?: (last ?: 10)

        val allQuery: TypedQuery<*> = entityManager.createQuery(all)
            .setMaxResults(
                limit
            )

        return allQuery.resultList.map {
            return@map DefaultEdge(
                factory.fromEntity(it as U),
                DefaultConnectionCursor(createCursor(it.cursorId!!, it.createdAt!!)),
            )
        }
    }

    private fun createCursor(id: Long, lastCreatedAt: OffsetDateTime): String? {
        val gson = Gson().newBuilder()
            .registerTypeAdapter(OffsetDateTime::class.java, OffsetDateTimeConverter())
            .create()

        val cursorData = CursorData(
            id = id,
            lastCreatedAt = lastCreatedAt,
        )

        val bytes: ByteArray = gson.toJson(cursorData).toByteArray(StandardCharsets.UTF_8)
        return Base64.getEncoder().encodeToString(bytes)
    }

    private fun decodeCursor(cursor: String): CursorData? {
        val decode = Base64.getDecoder().decode(cursor)

        val gson = Gson().newBuilder()
            .registerTypeAdapter(OffsetDateTime::class.java, OffsetDateTimeConverter())
            .create()

        return gson.fromJson(decode.toString(StandardCharsets.UTF_8), CursorData::class.java)
    }
}

