package org.anthaathi.crm.errors

import javax.ws.rs.NotFoundException
import javax.ws.rs.core.Response
import javax.ws.rs.ext.ExceptionMapper
import javax.ws.rs.ext.Provider
import java.util.Scanner


@Provider
class NotFoundExceptionMapper : ExceptionMapper<NotFoundException?> {
    private var notFoundPage: String? = null

    init {
        try {
            notFoundPage = Scanner(
                this.javaClass.getResourceAsStream("/META-INF/resources/index.html"),
                "UTF-8"
            ).useDelimiter("\\A").next()
        } catch (_: Exception) {
            println("index.html not found")
        }
    }

    override fun toResponse(exception: NotFoundException?): Response {
        if (notFoundPage == null) {
            return Response.status(404).build()
        }

        return Response.status(200).entity(notFoundPage).build()
    }
}
