package org.anthaathi.graphql_engine

import org.eclipse.microprofile.graphql.Description
import org.eclipse.microprofile.graphql.GraphQLApi
import org.eclipse.microprofile.graphql.Query

@GraphQLApi
class MainResource {
    @Query
    @Description("Get a Films from a galaxy far far away")
    fun getFilm(filmId: Int): String? {
        return null
    }
}
