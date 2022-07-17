package org.anthaathi.graphqlengine.plugins.core.engine

import com.netflix.graphql.dgs.DgsCodeRegistry
import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsTypeDefinitionRegistry
import graphql.language.*
import graphql.schema.DataFetcher
import graphql.schema.DataFetchingEnvironment
import graphql.schema.FieldCoordinates
import graphql.schema.GraphQLCodeRegistry
import graphql.schema.idl.TypeDefinitionRegistry
import org.anthaathi.graphqlengine.plugins.core.input_generator.*
import org.anthaathi.graphqlengine.plugins.core.interfaces.CorePlugin
import org.anthaathi.graphqlengine.plugins.core.schema_generator.CRUDGenerator
import java.util.*


@DgsComponent
class CoreEngine {
    val plugins = listOf<CorePlugin>()
    val schemaGenerator = listOf(CRUDGenerator())

    val inputGenerator = listOf(
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

        inputGenerator.forEach {
            typeDefinitionRegistry = typeDefinitionRegistry.merge(it.registry(schemaRegistry))
        }

        schemaGenerator.forEach {
            typeDefinitionRegistry = typeDefinitionRegistry.merge(it.registry(schemaRegistry))
        }

        typeDefinitionRegistry.add(createNodeQuery())

        return typeDefinitionRegistry
    }

    @DgsCodeRegistry
    fun registry(
        codeRegistryBuilder: GraphQLCodeRegistry.Builder,
        registry: TypeDefinitionRegistry?
    ): GraphQLCodeRegistry.Builder? {
        val df = DataFetcher { dfe: DataFetchingEnvironment? -> Random().nextInt() }

        val coordinates = FieldCoordinates.coordinates("Query", "randomNumber")

        return codeRegistryBuilder.dataFetcher(coordinates, df)
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
