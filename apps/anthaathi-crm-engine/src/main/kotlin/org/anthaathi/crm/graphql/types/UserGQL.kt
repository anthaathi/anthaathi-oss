package org.anthaathi.crm.graphql.types

import org.eclipse.microprofile.graphql.Id
import org.eclipse.microprofile.graphql.Type

@Type("User")
class UserGQL(
    @set:Id
    @get:Id
    override var id: String,
) : Node
