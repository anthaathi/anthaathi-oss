package org.anthaathi.commerce.product.entity

import java.io.Serializable
import javax.persistence.*

@Entity
@Cacheable
@Table(name = "collection_application")
open class CollectionApplication : Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    open var id: Int? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "collection_id")
    open var collection: Collection? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "application_id")
    open var application: Application? = null

    companion object {
        private const val serialVersionUID = 186511096350063292L
    }
}
