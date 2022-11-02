package org.anthaathi.commerce.product.entity

import java.io.Serializable
import javax.persistence.*

@Entity
@Cacheable
@Table(name = "product_application")
open class ProductApplication : Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    open var id: Int? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    open var product: Product? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "application_id")
    open var application: Application? = null

    companion object {
        private const val serialVersionUID = -3232401419798832544L
    }
}
