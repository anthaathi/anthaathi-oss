package org.anthaathi.crm.database.converter

import com.google.i18n.phonenumbers.Phonenumber
import org.anthaathi.crm.database.entity.UserEntity
import org.anthaathi.crm.types.MobileNumber
import org.anthaathi.crm.types.User
import org.anthaathi.crm.utils.IdGenerator

fun User.Companion.type(): String {
    return "User"
}

fun User.Companion.fromEntity(userEntity: UserEntity): User {
    val phoneNumber = Phonenumber.PhoneNumber()
    if (userEntity.mobileNumber1 != null) {
        phoneNumber.rawInput =userEntity.mobileNumber1
    }
    val phoneNumber2 = Phonenumber.PhoneNumber()
    if (userEntity.mobileNumber2 != null) {
        phoneNumber2.rawInput = userEntity.mobileNumber2
    }

    return User(
        id = IdGenerator.toGlobalId(User.type(), userEntity.id.toString()),
        createdAt = userEntity.createdAt!!,
        displayName = userEntity.firstName + " " + userEntity.lastName,
        email = userEntity.email,
        phoneNumber = MobileNumber(
            countryCode = phoneNumber.countryCode,
            mobileNumber = phoneNumber.nationalNumber.toString(),
        ),
        phoneNumber2 = MobileNumber(
            countryCode = phoneNumber2.countryCode,
            mobileNumber = phoneNumber2.nationalNumber.toString(),
        ),
        dateOfBirth = userEntity.dateOfBirth,
        employeeId = userEntity.employeeId,
        gender = userEntity.gender,
        firstName = userEntity.firstName,
        updatedAt = userEntity.updatedAt,
        lastName = userEntity.lastName,
        middleName = userEntity.middleName,
        qualification = userEntity.qualification,
    )
}
