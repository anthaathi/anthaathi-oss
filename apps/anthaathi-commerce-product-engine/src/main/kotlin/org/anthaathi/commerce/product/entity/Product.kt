package org.anthaathi.commerce.product.entity

import java.io.Serializable
import java.time.OffsetDateTime
import java.util.*
import javax.persistence.*

@Entity
@Cacheable
@Table(name = "product")
open class Product : Serializable {
    @Id
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    @Column(name = "status", nullable = false)
    open var status: String? = null

    @Column(name = "sort")
    open var sort: Int? = null

    @Column(name = "date_created")
    open var dateCreated: OffsetDateTime? = null

    @Column(name = "date_updated")
    open var dateUpdated: OffsetDateTime? = null

    @Column(name = "origin")
    open var origin: String? = null

    @Column(name = "vendor")
    open var vendor: String? = null

    @Column(name = "handle")
    open var handle: String? = null

    @Column(name = "product_type")
    open var productType: String? = null

    @OneToMany(mappedBy = "product")
    open var productTranslations: MutableSet<ProductTranslation> = mutableSetOf()

    @OneToMany(mappedBy = "product")
    open var productPricings: MutableSet<ProductPricing> = mutableSetOf()

    @OneToMany(mappedBy = "product")
    open var productFiles: MutableSet<ProductFile> = mutableSetOf()

    @OneToMany(mappedBy = "product")
    open var collectionProducts: MutableSet<CollectionProduct> = mutableSetOf()

    @OneToMany(mappedBy = "product")
    open var productApplications: MutableSet<ProductApplication> = mutableSetOf()

    @OneToMany(mappedBy = "product")
    open var productVariants: MutableSet<ProductVariant> = mutableSetOf()

    companion object {
        private const val serialVersionUID = 5071014714025391669L
    }
}
