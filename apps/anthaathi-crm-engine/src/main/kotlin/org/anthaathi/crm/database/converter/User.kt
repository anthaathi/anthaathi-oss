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
    phoneNumber.rawInput = userEntity.mobileNumber1

    return User(
        id = IdGenerator.toGlobalId(User.type(), userEntity.id.toString()),
        createdAt = userEntity.createdAt!!,
        displayName = userEntity.firstName + " " + userEntity.lastName,
        email = userEntity.email,
        phoneNumber = MobileNumber(
            countryCode = phoneNumber.countryCode,
            mobileNumber = phoneNumber.nationalNumber.toString(),
        ),
        updatedAt = userEntity.updatedAt,
    )
}
