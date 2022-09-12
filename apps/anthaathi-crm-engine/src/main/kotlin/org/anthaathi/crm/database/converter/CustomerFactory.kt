package org.anthaathi.crm.database.converter

import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.database.entity.CustomerEntity
import org.anthaathi.crm.types.Customer
import org.anthaathi.crm.types.MobileNumber
import org.anthaathi.crm.types.ProfilePicture
import org.anthaathi.crm.types.User
import org.anthaathi.crm.utils.IdGenerator
import java.time.OffsetTime
import java.util.*

class CustomerFactory : ConverterFactory<Customer, CustomerEntity, Any> {
    override val type: String
        get() = "Customer"

    override fun toEntity(input: Any): CustomerEntity {
        TODO("Not yet implemented")
    }

    override fun fromEntity(entity: CustomerEntity): Customer {
        return Customer(
            id = IdGenerator.toGlobalId(type, entity.id.toString()),
            firstName = entity.firstName,
            lastName = entity.lastName,
            middleName = entity.middleName,
            mobileNumber1 = MobileNumber(
                countryCode = entity.mobileNumber1?.split(" ")?.get(0)?.removePrefix("+")?.toInt(),
                mobileNumber = entity.mobileNumber1?.split(" ")?.filterIndexed { index, _ -> index != 0 }
                    ?.joinToString(separator = "")
            ),
            mobileNumber2 = MobileNumber(
                countryCode = entity.mobileNumber2?.split(" ")?.get(0)?.removePrefix("+")?.toInt(),
                mobileNumber = entity.mobileNumber2?.split(" ")?.filterIndexed { index, _ -> index != 0 }
                    ?.joinToString(separator = "")
            ),
            gender = entity.gender,
            dateOfBirth = entity.dateOfBirth?.atTime(OffsetTime.now()),
            jobTitle = entity.jobTitle,
            priority = entity.priority,
            profilePicture = ProfilePicture(
                id = IdGenerator.toGlobalId(DgsConstants.PROFILEPICTURE.TYPE_NAME, Random().nextInt().toString()),
                picture = entity.profilePicture,
                createdAt = entity.createdAt!!
            ),
            organizations = null,
            email = entity.email,
            qualification = entity.qualification,
            user = User(id = entity.userId.toString(), createdAt = entity.createdAt!!),
            documents = null,
            addresses = null,
            createdAt = entity.createdAt!!,
            updatedAt = entity.updatedAt
        )
    }
}
