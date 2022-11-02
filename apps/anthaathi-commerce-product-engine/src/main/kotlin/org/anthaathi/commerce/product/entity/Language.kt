package org.anthaathi.commerce.product.entity

import java.io.Serializable
import javax.persistence.*

@Entity
@Cacheable
@Table(name = "languages")
open class Language : Serializable {
    @Id
    @Column(name = "code", nullable = false)
    open var id: String? = null

    @Column(name = "name")
    open var name: String? = null

    @Column(name = "direction")
    open var direction: String? = null

    @OneToMany(mappedBy = "languagesCode")
    open var productTranslations: MutableSet<org.anthaathi.commerce.product.entity.ProductTranslation> = mutableSetOf()

    @OneToMany(mappedBy = "languagesCode")
    open var productVariantTranslations: MutableSet<org.anthaathi.commerce.product.entity.ProductVariantTranslation> =
        mutableSetOf()

    companion object {
        private const val serialVersionUID = 3923309456455284712L
    }
}
