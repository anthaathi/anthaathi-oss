package org.anthaathi.graphqlengine.plugins.core.engine

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsTypeDefinitionRegistry
import graphql.language.*
import graphql.schema.idl.TypeDefinitionRegistry
import org.anthaathi.graphqlengine.plugins.core.input_generator.*
import org.anthaathi.graphqlengine.plugins.postgres.PostgreSQLGraphqlEngine
import org.anthaathi.graphqlengine.plugins.core.interfaces.CorePlugin

@DgsComponent
class CoreEngine {
    val plugins = listOf<CorePlugin>(
        PostgreSQLGraphqlEngine()
    )

    val inputGenerator = listOf<InputGenerator>(
        StringCmp(),
        IDCmp(),
        BooleanCmp(),
        FloatCmp(),
        IntCmp(),
        DateTimeCmp()
    )

    @DgsTypeDefinitionRegistry
    fun registry(schemaRegistry: TypeDefinitionRegistry): TypeDefinitionRegistry? {
        var typeDefinitionRegistry = TypeDefinitionRegistry()

        plugins.forEach {
            typeDefinitionRegistry = typeDefinitionRegistry.merge(it.registry(schemaRegistry))
        }

        inputGenerator.forEach {
            typeDefinitionRegistry = typeDefinitionRegistry.merge(it.registry(schemaRegistry))
        }

        typeDefinitionRegistry.add(createNodeQuery())

        return typeDefinitionRegistry
    }

    private fun createNodeQuery(): ObjectTypeDefinition {
        return ObjectTypeExtensionDefinition.newObjectTypeDefinition()
            .fieldDefinition(
                FieldDefinition.newFieldDefinition()
                    .name("node")
                    .inputValueDefinition(
                        InputValueDefinition.newInputValueDefinition()
                            .name("id")
                            .type(TypeName("ID"))
                            .build()
                    )
                    .build()
            )
            .name("Query")
            .build()
    }
}
