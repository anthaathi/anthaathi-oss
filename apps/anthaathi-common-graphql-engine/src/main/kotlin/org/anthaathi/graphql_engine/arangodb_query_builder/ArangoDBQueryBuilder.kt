package org.anthaathi.graphql_engine.arangodb_query_builder

import com.arangodb.ArangoDatabase
import com.arangodb.entity.ArangoDBVersion
import javax.enterprise.context.ApplicationScoped
import javax.inject.Inject


@ApplicationScoped
class ArangoDBQueryBuilder @Inject constructor(private val arango: ArangoDatabase) {
    val version: ArangoDBVersion
        get() = arango.version
}
