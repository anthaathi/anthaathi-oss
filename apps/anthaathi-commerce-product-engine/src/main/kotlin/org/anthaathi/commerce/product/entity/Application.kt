package org.anthaathi.commerce.product.entity

import java.io.Serializable
import java.time.OffsetDateTime
import javax.persistence.*

@Entity
@Cacheable
@Table(name = "application")
open class Application : Serializable {
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

    @Column(name = "title")
    open var title: String? = null

    @Column(name = "apiKey")
    open var apiKey: String? = null

    @OneToMany(mappedBy = "application")
    open var collectionApplications: MutableSet<org.anthaathi.commerce.product.entity.CollectionApplication> =
        mutableSetOf()

    @OneToMany(mappedBy = "application")
    open var productApplications: MutableSet<org.anthaathi.commerce.product.entity.ProductApplication> = mutableSetOf()

    companion object {
        private const val serialVersionUID = 4404337255807923845L
    }
}
