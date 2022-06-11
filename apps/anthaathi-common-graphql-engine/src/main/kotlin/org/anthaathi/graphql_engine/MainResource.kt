package org.anthaathi.graphql_engine

import org.anthaathi.graphql_engine.arangodb_query_builder.ArangoDBQueryBuilder
import javax.ws.rs.GET
import javax.ws.rs.Path
import javax.ws.rs.Produces
import javax.ws.rs.core.MediaType

@Path("/hello")
class GreetingResource(val queryBuilder: ArangoDBQueryBuilder) {}
