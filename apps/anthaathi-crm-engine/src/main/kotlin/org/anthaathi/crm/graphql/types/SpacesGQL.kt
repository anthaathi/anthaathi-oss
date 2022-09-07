package org.anthaathi.crm.graphql.types

import graphql.relay.Connection
import io.smallrye.graphql.api.AdaptToScalar
import io.smallrye.graphql.api.Scalar
import org.eclipse.microprofile.graphql.Id
import org.eclipse.microprofile.graphql.Type
import java.util.*

@Type("Spaces")
class SpacesGQL(
    @set:Id
    @get:Id
    override var id: String,

    var name: String,

    var icon: String?,

    @AdaptToScalar(
        Scalar.DateTime::class
    )
    var createdAt: Date?,

    @AdaptToScalar(
        Scalar.DateTime::class
    )
    var updatedAt: Date?,

    var spaces: Connection<SpacesGQL>? = null,

    var tasks: Connection<TaskGQL>? = null
) : Node
