package org.anthaathi.commerce.product.entity

import org.hibernate.annotations.Type
import java.io.Serializable
import javax.persistence.*

@Entity
@Cacheable
@Table(name = "product_translations")
open class ProductTranslation : Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    open var id: Int? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    open var product: Product? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "languages_code", updatable = false, insertable = false)
    open var languagesCode: Language? = null

    @Column(name = "languages_code")
    open var language: String? = null

    @Column(name = "title", nullable = false)
    open var title: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "description")
    open var description: String? = null

    companion object {
        private const val serialVersionUID = -6654605907429089984L
    }
}
