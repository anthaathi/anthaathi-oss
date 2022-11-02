package org.anthaathi.commerce.product.entity

import java.io.Serializable
import java.time.OffsetDateTime
import javax.persistence.*

@Entity
@Cacheable
@Table(name = "collection_product_relation")
open class CollectionProductRelation : Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    open var id: Int? = null

    @Column(name = "status", nullable = false)
    open var status: String? = null

    @Column(name = "sort")
    open var sort: Int? = null

    @Column(name = "date_created")
    open var dateCreated: OffsetDateTime? = null

    @Column(name = "date_updated")
    open var dateUpdated: OffsetDateTime? = null

    companion object {
        private const val serialVersionUID = 3491938500085904954L
    }
}
