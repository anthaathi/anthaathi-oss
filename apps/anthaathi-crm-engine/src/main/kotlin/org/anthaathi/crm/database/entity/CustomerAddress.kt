package org.anthaathi.crm.database.entity

import java.util.*
import javax.persistence.*

@Entity
@Table(name = "customer_addresses", schema = "crm")
open class CustomerAddress {
    @Id
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "customer_id", nullable = false)
    open var customer: Customer? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "address_id", nullable = false)
    open var address: Address? = null
}
