package org.anthaathi.crm.database.entity

import org.anthaathi.crm.database.interfaces.PagableEntity
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import java.time.OffsetDateTime
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "task_stages", schema = "crm")
open class TaskStageEntity : PagableEntity {
    @Id
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    @Column(name = "title", nullable = false, length = 150)
    open var title: String? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "project_id", nullable = false)
    open var project: ProjectEntity? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "next_stage_id")
    open var nextStage: TaskStageEntity? = null

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "previous_stage_id")
    open var previousStage: TaskStageEntity? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "task_id", nullable = false)
    open var task: TaskEntity? = null

    @Column(name = "icon", nullable = false, length = 50)
    open var icon: String? = null

    @Column(name = "completed_at")
    open var completedAt: OffsetDateTime? = null

    @Column(name = "completed_by")
    open var completedBy: UUID? = null

    @Column(name = "is_mandatory", nullable = false)
    open var isMandatory: Boolean? = false

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
