package org.anthaathi.graphql.engine.it;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.is;

import org.junit.jupiter.api.Test;

import io.quarkus.test.junit.QuarkusTest;

@QuarkusTest
public class GraphqlEngineResourceTest {

    @Test
    public void testHelloEndpoint() {
        given()
                .when().get("/graphql-engine")
                .then()
                .statusCode(200)
                .body(is("Hello graphql-engine"));
    }
}
