package org.anthaathi.crm.database.entity

import java.util.*
import javax.persistence.*

@Entity
@Table(name = "task_stages_documents", schema = "crm")
open class TaskStagesDocument {
    @Id
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "task_stage_id", nullable = false)
    open var taskStage: TaskStage? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "document_id", nullable = false)
    open var document: Document? = null
}
