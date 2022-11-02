package org.anthaathi.commerce.product.entity

import java.io.Serializable
import javax.persistence.*

@Entity
@Cacheable
@Table(name = "product_variant_translations")
open class ProductVariantTranslation : Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    open var id: Int? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_variant_id")
    open var productVariant: ProductVariant? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "languages_code", insertable = false, updatable = false)
    open var languagesCode: Language? = null

    @Column(name = "languages_code")
    open var language: String? = null

    @Column(name = "title")
    open var title: String? = null

    companion object {
        private const val serialVersionUID = -862697627319872939L
    }
}
