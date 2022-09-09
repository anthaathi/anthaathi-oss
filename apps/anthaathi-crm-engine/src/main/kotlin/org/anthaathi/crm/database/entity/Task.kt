package org.anthaathi.crm.database.entity

import org.hibernate.annotations.Type
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import java.time.LocalDate
import java.time.OffsetDateTime
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "task", schema = "crm")
open class Task {
    @Id
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "owner_id", nullable = false, referencedColumnName = "id")
    open var owner: User? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "project_id", nullable = false)
    open var project: Project? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "space_folder_id", nullable = false)
    open var spaceFolder: SpaceFolder? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "organization_id", nullable = false)
    open var organization: CustomerOrganization? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "status_id", nullable = false)
    open var status: Status? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id", referencedColumnName = "id")
    open var team: Team? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "title", nullable = false)
    open var title: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "description", nullable = false)
    open var description: String? = null

    @Column(name = "due_date")
    open var dueDate: LocalDate? = null

    @Column(name = "priority", nullable = false)
    open var priority: Int? = null

    @Column(name = "is_template", nullable = false)
    open var isTemplate: Boolean? = false

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "icon", nullable = false)
    open var icon: String? = null

    @Column(name = "background", nullable = false, length = 50)
    open var background: String? = null

    @Column(name = "created_at", nullable = false, updatable = false)
    @CreatedDate
    open var createdAt: OffsetDateTime? = null

    @Column(name = "updated_at")
    @LastModifiedDate
    open var updatedAt: OffsetDateTime? = null

    @Column(name = "created_by", nullable = false)
    open var createdBy: UUID? = null
}
