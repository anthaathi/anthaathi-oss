package org.anthaathi.crm.database.converter

interface ConverterFactory<GQLType, Entity> {
    val type: String

    fun fromEntity(entity: Entity): GQLType
}
