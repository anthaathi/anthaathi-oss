package org.anthaathi.crm.database.entity

import java.util.*
import javax.persistence.*

@Entity
@Table(name = "task_commnet_reactions", schema = "crm")
open class TaskCommnetReaction {
    @Id
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "task_comment_id", nullable = false)
    open var taskComment: TaskComment? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "reaction_id", nullable = false)
    open var reaction: Reaction? = null
}
