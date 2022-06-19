package org.anthaathi.arango_query_builder

import kotlin.test.Test


class QueryBuilderTest : BaseSetup() {
    @Test fun someTest() {
        QueryBuilder(this.database!!)
    }
}
