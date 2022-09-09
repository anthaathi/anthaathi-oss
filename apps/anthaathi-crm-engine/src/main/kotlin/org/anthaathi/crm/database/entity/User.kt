package org.anthaathi.crm.database.entity

import org.hibernate.annotations.Type
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import java.time.LocalDate
import java.time.OffsetDateTime
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "\"user\"", schema = "auth")
open class User {
    @Id
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "first_name", nullable = false)
    open var firstName: String? = null

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "project_id", nullable = false, referencedColumnName = "id")
    open var project: Project? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "middle_name", nullable = false)
    open var middleName: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "last_name", nullable = false)
    open var lastName: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "mobile_number_1", nullable = false)
    open var mobileNumber1: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "mobile_number_2", nullable = false)
    open var mobileNumber2: String? = null

    @Column(name = "gender", nullable = false, length = 20)
    open var gender: String? = null

    @Column(name = "date_of_birth", nullable = false)
    open var dateOfBirth: LocalDate? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "email", nullable = false)
    open var email: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "qualification", nullable = false)
    open var qualification: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "employee_id", nullable = false)
    open var employeeId: String? = null

    @Column(name = "created_at", nullable = false, updatable = false)
    @CreatedDate
    open var createdAt: OffsetDateTime? = null

    @Column(name = "updated_at")
    @LastModifiedDate
    open var updatedAt: OffsetDateTime? = null

    @Column(name = "created_by", nullable = false)
    open var createdBy: UUID? = null
}
