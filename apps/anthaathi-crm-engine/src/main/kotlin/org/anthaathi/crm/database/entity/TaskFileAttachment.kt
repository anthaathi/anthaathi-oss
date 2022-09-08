package org.anthaathi.crm.database.entity

import java.util.*
import javax.persistence.*

@Entity
@Table(name = "task_file_attachments", schema = "crm")
open class TaskFileAttachment {
    @Id
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "task_id", nullable = false)
    open var task: Task? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "project_id", nullable = false)
    open var project: Project? = null

    @Column(name = "attachment_id", nullable = false)
    open var attachmentId: UUID? = null
}
