package org.anthaathi.crm.database.entity

import java.util.*
import javax.persistence.*

@Entity
@Table(name = "team_members", schema = "auth")
open class TeamMember {
    @Id
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    open var user: User? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "team_id", nullable = false)
    open var team: Team? = null
}
