package org.anthaathi.commerce.product.entity

import org.hibernate.annotations.Type
import java.io.Serializable
import java.time.OffsetDateTime
import java.util.*
import javax.persistence.*

@Entity
@Cacheable
@Table(name = "collection")
open class Collection : Serializable {
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

    @Column(name = "title")
    open var title: String? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_collection")
    open var parentCollection: Collection? = null

    @Column(name = "handle")
    open var handle: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "description")
    open var description: String? = null

    @OneToMany(mappedBy = "parentCollection")
    open var collections: MutableSet<Collection> = mutableSetOf()

    @OneToMany(mappedBy = "collection")
    open var collectionApplications: MutableSet<org.anthaathi.commerce.product.entity.CollectionApplication> =
        mutableSetOf()

    @OneToMany(mappedBy = "collection")
    open var collectionProducts: MutableSet<org.anthaathi.commerce.product.entity.CollectionProduct> = mutableSetOf()

    companion object {
        private const val serialVersionUID = 6281976843693810446L
    }
}
