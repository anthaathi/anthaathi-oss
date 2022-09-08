package org.anthaathi.crm.database.entity

import java.util.*
import javax.persistence.*

@Entity
@Table(name = "task_pre_requisites", schema = "crm")
open class TaskPreRequisite {
    @Id
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "task_id", nullable = false)
    open var task: Task? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "project_id", nullable = false)
    open var project: Project? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "pre_requisite_id", nullable = false)
    open var preRequisite: PreRequisite? = null
}
