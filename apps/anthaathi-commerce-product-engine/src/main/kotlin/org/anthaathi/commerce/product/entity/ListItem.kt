package org.anthaathi.commerce.product.entity

import java.io.Serializable
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "list_item")
open class ListItem : Serializable {
    @Id
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "variant")
    open var variant: ProductVariant? = null

    companion object {
        private const val serialVersionUID = 2544138006736369387L
    }

    //TODO [JPA Buddy] generate columns from DB
}
