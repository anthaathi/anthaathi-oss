package org.anthaathi.crm.errors

import javax.ws.rs.NotFoundException
import javax.ws.rs.core.Response
import javax.ws.rs.ext.ExceptionMapper
import javax.ws.rs.ext.Provider
import java.util.Scanner


@Provider
class NotFoundExceptionMapper : ExceptionMapper<NotFoundException?> {
    private val notFoundPage: String = Scanner(
        this.javaClass.getResourceAsStream("/META-INF/resources/index.html"),
        "UTF-8"
    ).useDelimiter("\\A").next()

    override fun toResponse(exception: NotFoundException?): Response {
        return Response.status(200).entity(notFoundPage).build()
    }
}
