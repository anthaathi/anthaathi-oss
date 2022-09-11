package org.anthaathi.crm.camel.routes

import org.springframework.stereotype.Component
import org.apache.camel.builder.RouteBuilder;

@Component
class CreateTask : RouteBuilder() {
    override fun configure() {
        from("direct:createTask")
            .routeId("direct-createTask")
            .process {
                println(it.created)
            }
            .end()
    }
}
