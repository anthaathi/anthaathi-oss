package org.anthaathi.crm.database.entity

import org.anthaathi.crm.database.interfaces.PagableEntity
import org.hibernate.annotations.Type
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import java.time.OffsetDateTime
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "\"user\"", schema = "auth")
open class UserEntity : PagableEntity {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    open var id: UUID? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "first_name", nullable = false)
    open var firstName: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "middle_name", nullable = true)
    open var middleName: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "last_name", nullable = false)
    open var lastName: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "mobile_number_1", nullable = true)
    open var mobileNumber1: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "mobile_number_2", nullable = true)
    open var mobileNumber2: String? = null

    @Column(name = "gender", nullable = true, length = 20)
    open var gender: String? = null

    @Column(name = "date_of_birth", nullable = true)
    open var dateOfBirth: OffsetDateTime? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "email", nullable = false)
    open var email: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "qualification", nullable = true)
    open var qualification: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "employee_id", nullable = true)
    open var employeeId: String? = null

    @Column(name = "created_at", nullable = false, updatable = false)
    @CreatedDate
    override var createdAt: OffsetDateTime? = null

    @Column(name = "updated_at")
    @LastModifiedDate
    open var updatedAt: OffsetDateTime? = null

    @Column(name = "created_by", nullable = false)
    open var createdBy: UUID? = null

    @OrderBy("createdAt")
    @OneToMany(mappedBy = "user", orphanRemoval = true)
    open var userOrganization: MutableList<UserOrganizationEntity> = mutableListOf()

    @Column(name = "cursor_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    override var cursorId: Long? = null
}
