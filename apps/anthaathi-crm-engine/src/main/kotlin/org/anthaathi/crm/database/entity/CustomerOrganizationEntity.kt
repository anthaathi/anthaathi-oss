package org.anthaathi.crm.database.entity

import org.anthaathi.crm.database.interfaces.PagableEntity
import org.hibernate.annotations.Type
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import java.time.OffsetDateTime
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "customer_organization", schema = "crm")
open class CustomerOrganizationEntity : PagableEntity {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    open var id: UUID? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "name", nullable = false)
    open var name: String? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id")
    open var project: ProjectEntity? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "logo", nullable = false)
    open var logo: String? = null

    @Column(name = "created_at", nullable = false, updatable = false)
    @CreatedDate
    override var createdAt: OffsetDateTime? = null

    @Column(name = "updated_at")
    @LastModifiedDate
    open var updatedAt: OffsetDateTime? = null

    @Column(name = "created_by", nullable = false)
    open var createdBy: UUID? = null

    @Column(name = "cursorId", nullable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    override var cursorId: Long? = null
}
