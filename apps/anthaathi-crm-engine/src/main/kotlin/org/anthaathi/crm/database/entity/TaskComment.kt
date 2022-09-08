package org.anthaathi.crm.database.entity

import org.hibernate.annotations.Type
import java.time.OffsetDateTime
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "task_comment", schema = "crm")
open class TaskComment {
    @Id
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "content", nullable = false)
    open var content: String? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "project_id", nullable = false)
    open var project: Project? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "task_id", nullable = false)
    open var task: Task? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "task_stage_id")
    open var taskStage: org.anthaathi.crm.database.entity.TaskStage? = null

    @Column(name = "reply_to", nullable = false)
    open var replyTo: UUID? = null

    @Column(name = "created_at", nullable = false)
    open var createdAt: OffsetDateTime? = null

    @Column(name = "created_by", nullable = false)
    open var createdBy: UUID? = null
}
