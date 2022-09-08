package org.anthaathi.crm.database.entity

import org.hibernate.annotations.Type
import java.time.OffsetDateTime
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "customer_organization", schema = "crm")
open class CustomerOrganization {
    @Id
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "name", nullable = false)
    open var name: String? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id")
    open var project: org.anthaathi.crm.database.entity.Project? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "logo", nullable = false)
    open var logo: String? = null

    @Column(name = "created_at", nullable = false)
    open var createdAt: OffsetDateTime? = null

    @Column(name = "created_by", nullable = false)
    open var createdBy: UUID? = null
}
