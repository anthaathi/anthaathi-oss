package org.anthaathi.commerce.product.entity

import org.hibernate.annotations.Type
import java.io.Serializable
import java.time.OffsetDateTime
import java.util.*
import javax.persistence.*

@Entity
@Cacheable
@Table(name = "product_variant")
open class ProductVariant : Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product", insertable = false, updatable = false)
    open var product: Product? = null

    @Column(name = "product")
    open var productId: UUID? = null

    @Column(name = "requires_shipping")
    open var requiresShipping: Boolean? = null

    @Column(name = "sku")
    open var sku: String? = null

    @Column(name = "barcode")
    open var barcode: String? = null

    @Column(name = "taxable")
    open var taxable: Boolean? = null

    @Column(name = "\"position\"")
    open var position: Int? = null

    @Column(name = "packaging")
    open var packaging: String? = null

    @Column(name = "weight_unit")
    open var weightUnit: String? = null

    @Column(name = "origin")
    open var origin: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "purchase_note")
    open var purchaseNote: String? = null

    @OneToMany(mappedBy = "productVariant")
    open var productVariantTranslations: MutableSet<ProductVariantTranslation> =
        mutableSetOf()

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_created")
    open var userCreated: DirectusUser? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_updated")
    open var userUpdated: DirectusUser? = null

    @Column(name = "weight")
    open var weight: String? = null

    @OneToMany(mappedBy = "product")
    open var productVariantPricings: MutableSet<ProductPricing> = mutableSetOf()

    @OneToMany(mappedBy = "variant")
    open var listItems: MutableSet<ListItem> = mutableSetOf()

    companion object {
        private const val serialVersionUID = 1924482475036270059L
    }
}
