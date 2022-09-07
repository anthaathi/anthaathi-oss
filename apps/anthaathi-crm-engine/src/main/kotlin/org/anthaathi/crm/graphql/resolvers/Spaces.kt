package org.anthaathi.crm.graphql.resolvers

import org.anthaathi.crm.graphql.types.SpacesGQL
import org.eclipse.microprofile.graphql.Description
import org.eclipse.microprofile.graphql.GraphQLApi
import org.eclipse.microprofile.graphql.Query
import java.util.*

@GraphQLApi
class Spaces {
    @Query("spaces")
    @Description("Get all Films from a galaxy far far away")
    fun getSpaces(): SpacesGQL {
        return SpacesGQL("Hello world", "Hello world", "", Date(), Date())
    }
}
