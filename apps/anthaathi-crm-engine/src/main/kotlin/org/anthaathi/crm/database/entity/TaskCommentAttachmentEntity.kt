package org.anthaathi.crm.database.entity

import org.anthaathi.crm.database.interfaces.PagableEntity
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import java.time.OffsetDateTime
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "task_comment_attachments", schema = "crm")
open class TaskCommentAttachmentEntity : PagableEntity {
    @Id
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "task_comment_id", nullable = false)
    open var taskComment: TaskCommentEntity? = null

    @Column(name = "attachment_id", nullable = false)
    open var attachmentId: UUID? = null

    @Column(name = "created_at", nullable = false, updatable = false)
    @CreatedDate
    override var createdAt: OffsetDateTime? = null

    @Column(name = "updated_at")
    @LastModifiedDate
    open var updatedAt: OffsetDateTime? = null

    @Column(name = "cursorId", nullable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    override var cursorId: Long? = null
}
