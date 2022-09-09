package org.anthaathi.crm.database.entity

import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import java.time.OffsetDateTime
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "customer_meta", schema = "crm")
open class CustomerMeta {
    @Id
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    @Column(name = "key", nullable = false, length = 50)
    open var key: String? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "customer_id", nullable = false)
    open var customer: Customer? = null

    @Column(name = "value", columnDefinition = "json not null")
    open var value: String? = null

    @Column(name = "created_at", nullable = false, updatable = false)
    @CreatedDate
    open var createdAt: OffsetDateTime? = null

    @Column(name = "updated_at")
    @LastModifiedDate
    open var updatedAt: OffsetDateTime? = null
}
