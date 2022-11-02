package org.anthaathi.commerce.product.entity

import java.io.Serializable
import java.time.OffsetDateTime
import java.util.*
import javax.persistence.*

@Entity
@Cacheable
@Table(name = "country")
open class Country : Serializable {
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

    @Column(name = "code")
    open var code: String? = null

    companion object {
        private const val serialVersionUID = -5183219998905437330L
    }
}
