package org.anthaathi.commerce.product.entity

import java.io.Serializable
import javax.persistence.*

@Entity
@Cacheable
@Table(name = "product_files")
open class ProductFile : Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    open var id: Int? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    open var product: Product? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "directus_files_id")
    open var directusFiles: DirectusFile? = null

    companion object {
        private const val serialVersionUID = -87575523746968649L
    }
}
