package org.anthaathi.crm.database.entity

import org.anthaathi.crm.database.interfaces.PagableEntity
import org.hibernate.annotations.Type
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import java.time.OffsetDateTime
import java.util.*
import javax.persistence.*


@Entity
@Table(name = "address", schema = "crm")
open class AddressEntity : PagableEntity {
    @Id
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    @Column(name = "cursor_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    override var cursorId: Long? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "type", nullable = false)
    open var type: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "address_line_1", nullable = false)
    open var addressLine1: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "address_line2", nullable = false)
    open var addressLine2: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "address_line_3", nullable = false)
    open var addressLine3: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "city", nullable = false)
    open var city: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "state", nullable = false)
    open var state: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "country", nullable = false)
    open var country: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "postal_code", nullable = false)
    open var postalCode: String? = null

    @Column(name = "created_at", nullable = false, updatable = false)
    @CreatedDate
    override var createdAt: OffsetDateTime? = null

    @Column(name = "updated_at")
    @LastModifiedDate
    open var updatedAt: OffsetDateTime? = null
}
