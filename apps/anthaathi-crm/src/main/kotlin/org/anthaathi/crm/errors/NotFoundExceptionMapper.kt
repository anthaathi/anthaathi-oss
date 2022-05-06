package org.anthaathi.crm.errors

import javax.ws.rs.NotFoundException
import javax.ws.rs.core.Response
import javax.ws.rs.ext.ExceptionMapper
import javax.ws.rs.ext.Provider
import java.util.Scanner;


@Provider
class NotFoundExceptionMapper : ExceptionMapper<NotFoundException?> {
    override fun toResponse(exception: NotFoundException?): Response {
        val text: String = Scanner(
            this.javaClass.getResourceAsStream("/META-INF/resources/index.html"),
            "UTF-8"
        ).useDelimiter("\\A").next()

        return Response.status(200).entity(text).build()
    }
}
