package org.anthaathi.graphqlengine.serializers

import au.com.origin.snapshots.serializers.SerializerType
import au.com.origin.snapshots.serializers.SnapshotSerializer
import au.com.origin.snapshots.serializers.ToStringSnapshotSerializer
import graphql.language.FieldDefinition
import graphql.language.ObjectTypeExtensionDefinition
import graphql.language.TypeName
import graphql.scalars.ExtendedScalars
import graphql.schema.idl.RuntimeWiring
import graphql.schema.idl.SchemaGenerator
import graphql.schema.idl.SchemaPrinter
import graphql.schema.idl.TypeDefinitionRegistry
import java.util.*
import java.util.stream.Collectors


class GraphQLJacksonSnapshotSerializer : SnapshotSerializer {
    override fun apply(objects: Array<Any>): String {
        val encoded = Arrays.stream(objects).map { obj: Any? ->
            if (obj is TypeDefinitionRegistry) {
                val runtimeWiring = RuntimeWiring.newRuntimeWiring()
                    .scalar(ExtendedScalars.DateTime)
                    .build()

                obj.add(
                    ObjectTypeExtensionDefinition.newObjectTypeDefinition()
                        .name("Query")
                        .fieldDefinition(
                            FieldDefinition.newFieldDefinition()
                                .name("_snap")
                                .type(TypeName("Boolean"))
                                .build()
                        )
                        .build()
                )

                val result = SchemaGenerator().makeExecutableSchema(obj, runtimeWiring)
                return@map SchemaPrinter(
                    SchemaPrinter.Options.defaultOptions()
                        .includeScalarTypes(true)
                        .includeDirectives(false)
                ).print(result)
            }

            obj.toString()
        }.collect(Collectors.toList()) as List<*>

        return encoded.joinToString("\n")
    }

    override fun getOutputFormat(): String {
        return SerializerType.TEXT.name
    }

    companion object {
        private val toStringSnapshotSerializer = ToStringSnapshotSerializer()
    }
}
