package org.anthaathi.graphqlengine

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class GraphqlEngineApplication

fun main(args: Array<String>) {
    runApplication<GraphqlEngineApplication>(*args)
}
