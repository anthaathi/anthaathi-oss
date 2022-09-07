package org.anthaathi.crm.graphql.types

import org.eclipse.microprofile.graphql.Id

interface Node {
    @set:Id
    @get:Id
    var id: String
}
