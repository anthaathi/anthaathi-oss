package org.anthaathi.crm.database.entity

import org.hibernate.annotations.Type
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import java.time.OffsetDateTime
import java.util.*
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Table


@Entity
@Table(name = "address", schema = "crm")
open class AddressEntity {
    @Id
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

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
    open var createdAt: OffsetDateTime? = null

    @Column(name = "updated_at")
    @LastModifiedDate
    open var updatedAt: OffsetDateTime? = null
}
