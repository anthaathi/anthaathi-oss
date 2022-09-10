package org.anthaathi.crm.database.entity

import org.hibernate.annotations.Type
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import java.time.OffsetDateTime
import java.util.*
import javax.persistence.*

@Entity
@Table(
    name = "organization", schema = "auth", indexes = [
        Index(name = "idx_organizationentity_name", columnList = "name"),
        Index(name = "idx_organizationentity", columnList = "tenant_id")
    ], uniqueConstraints = [
        UniqueConstraint(name = "uc_organizationentity", columnNames = ["tenant_id"])
    ]
)
open class OrganizationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    @Column(name = "name", nullable = false, length = 1000)
    open var name: String? = null

    @Column(name = "tenant_id", nullable = false, length = 1000)
    open var tenantId: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "description", nullable = false)
    open var description: String? = null

    @OrderBy("createdAt")
    @OneToMany(mappedBy = "organization", cascade = [CascadeType.ALL], orphanRemoval = true)
    open var userOrganization: MutableList<UserOrganizationEntity> = mutableListOf()

    @Column(name = "created_at", nullable = false, updatable = false)
    @CreatedDate
    open var createdAt: OffsetDateTime? = null

    @Column(name = "updated_at")
    @LastModifiedDate
    open var updatedAt: OffsetDateTime? = null

    @Column(name = "created_by", nullable = false)
    open var createdBy: UUID? = null
}
