package org.anthaathi.crm.database.entity

import org.anthaathi.crm.database.interfaces.PagableEntity
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import java.time.OffsetDateTime
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "user_organization_entity", schema = "auth")
open class UserOrganizationEntity : PagableEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    @ManyToOne(cascade = [CascadeType.ALL], optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    open var user: UserEntity? = null

    @ManyToOne(cascade = [CascadeType.ALL], optional = false)
    @JoinColumn(name = "organization_id", nullable = false)
    open var organization: OrganizationEntity? = null

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
