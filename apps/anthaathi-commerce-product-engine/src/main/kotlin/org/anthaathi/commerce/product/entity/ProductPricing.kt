package org.anthaathi.commerce.product.entity

import java.io.Serializable
import java.math.BigDecimal
import java.time.OffsetDateTime
import javax.persistence.*

@Entity
@Cacheable
@Table(name = "product_variant_pricing")
open class ProductPricing : Serializable {
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

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "product_variant", nullable = false)
    open var product: ProductVariant? = null

    @Column(name = "currency", nullable = false)
    open var currency: String? = null

    @Column(name = "amount", nullable = false, precision = 10, scale = 5)
    open var amount: BigDecimal? = null

    @Column(name = "sale_price", nullable = false, precision = 10, scale = 5)
    open var salePrice: BigDecimal? = null

    companion object {
        private const val serialVersionUID = -6081237325888408599L
    }
}
