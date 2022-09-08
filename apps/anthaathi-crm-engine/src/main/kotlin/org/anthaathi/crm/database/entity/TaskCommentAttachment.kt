package org.anthaathi.crm.database.entity

import java.util.*
import javax.persistence.*

@Entity
@Table(name = "task_comment_attachments", schema = "crm")
open class TaskCommentAttachment {
    @Id
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "task_comment_id", nullable = false)
    open var taskComment: TaskComment? = null

    @Column(name = "attachment_id", nullable = false)
    open var attachmentId: UUID? = null
}
