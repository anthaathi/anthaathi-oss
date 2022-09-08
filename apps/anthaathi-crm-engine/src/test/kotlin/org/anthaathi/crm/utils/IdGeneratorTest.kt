package org.anthaathi.crm.utils

import org.junit.jupiter.api.Test

internal class IdGeneratorTest {

    @Test
    fun toGlobalId() {
        assert(IdGenerator.toGlobalId("User", "1234 - 123 /") == "YW50aGFhdGhpOi8vVXNlci8xMjM0Ky0rMTIzKyUyRg==")
    }

    @Test
    fun fromGlobalId() {
        assert(IdGenerator.fromGlobalId("YW50aGFhdGhpOi8vVXNlci8xMjM0Ky0rMTIzKyUyRg==").id == "1234 - 123 /")
        assert(IdGenerator.fromGlobalId("YW50aGFhdGhpOi8vVXNlci8xMjM0Ky0rMTIzKyUyRg==").type == "User")
    }
}
