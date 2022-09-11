package org.anthaathi.crm.database.converter

import com.google.i18n.phonenumbers.Phonenumber
import org.anthaathi.crm.database.entity.UserEntity
import org.anthaathi.crm.types.MobileNumber
import org.anthaathi.crm.types.User
import org.anthaathi.crm.utils.IdGenerator

class UserFactory : ConverterFactory<User, UserEntity> {
    override val type: String
        get() = "User"

    override fun fromEntity(entity: UserEntity): User {
        val phoneNumber = Phonenumber.PhoneNumber()
        if (entity.mobileNumber1 != null) {
            phoneNumber.rawInput = entity.mobileNumber1
        }
        val phoneNumber2 = Phonenumber.PhoneNumber()
        if (entity.mobileNumber2 != null) {
            phoneNumber2.rawInput = entity.mobileNumber2
        }

        return User(
            id = IdGenerator.toGlobalId(type, entity.id.toString()),
            createdAt = entity.createdAt!!,
            displayName = entity.firstName + " " + entity.lastName,
            email = entity.email,
            phoneNumber = MobileNumber(
                countryCode = phoneNumber.countryCode,
                mobileNumber = phoneNumber.nationalNumber.toString(),
            ),
            phoneNumber2 = MobileNumber(
                countryCode = phoneNumber2.countryCode,
                mobileNumber = phoneNumber2.nationalNumber.toString(),
            ),
            dateOfBirth = entity.dateOfBirth,
            employeeId = entity.employeeId,
            gender = entity.gender,
            firstName = entity.firstName,
            updatedAt = entity.updatedAt,
            lastName = entity.lastName,
            middleName = entity.middleName,
            qualification = entity.qualification,
        )
    }
}
