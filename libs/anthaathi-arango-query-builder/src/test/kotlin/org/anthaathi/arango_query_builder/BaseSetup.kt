package org.anthaathi.arango_query_builder

import com.arangodb.ArangoDB
import com.arangodb.ArangoDatabase
import com.arangodb.DbName
import com.arangodb.mapping.ArangoJack
import kotlin.test.AfterTest
import kotlin.test.BeforeTest


open class BaseSetup {
    companion object {
        protected val DB_NAME: DbName = DbName.of("java_driver_test_db")
    }

    protected var database: ArangoDatabase? = null;

    private fun initDB() {
        val properties = System.getProperties()

        val arango = ArangoDB.Builder()
            .host(properties.getProperty("arangodb.host"), 8529)
            .user("root")
            .password("rootpassword")
            .serializer(ArangoJack())
            .build()

        database = arango.db(DB_NAME)

        if (database!!.exists()) {
            database!!.drop();
        }

        database!!.create();
    }

    private fun shutdownDB() {
        if (database!!.exists()) database!!.drop()
    }

    @BeforeTest
    fun setup() {
        initDB()
    }

    @AfterTest
    fun shutdown() {
        shutdownDB()
    }
}
