package org.anthaathi.graphql_engine.arangodb_database_configuration

import com.arangodb.ArangoDB
import com.arangodb.ArangoDatabase
import com.arangodb.DbName
import java.io.InputStream
import javax.enterprise.context.Dependent
import javax.enterprise.inject.Produces


@Dependent
class ArangoConfiguration {
    @Produces
    fun arangoDB(): ArangoDatabase? {
        val inputStream: InputStream = ArangoConfiguration::class.java
            .getResourceAsStream("application.properties") as InputStream

        return ArangoDB.Builder()
            .loadProperties(inputStream)
            .build()
            .db(DbName.of("graphql_engine"))
    }
}
