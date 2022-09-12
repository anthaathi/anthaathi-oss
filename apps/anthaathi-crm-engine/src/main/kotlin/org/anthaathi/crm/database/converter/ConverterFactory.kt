package org.anthaathi.crm.database.converter

interface ConverterFactory<GQLType, Entity, GQLCreateEntity> {
    val type: String

    fun fromEntity(entity: Entity): GQLType

    fun toEntity(input: GQLCreateEntity): Entity
}
