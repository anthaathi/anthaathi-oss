package org.anthaathi.commerce.product.entity

import java.io.Serializable
import java.util.*
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table

@Entity
@Table(name = "directus_users")
open class DirectusUser : Serializable {
    @Id
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    companion object {
        private const val serialVersionUID = 6446640584791389349L
    }

    //TODO [JPA Buddy] generate columns from DB
}
