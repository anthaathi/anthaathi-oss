package org.anthaathi.graphqlengine.plugins.arango

import graphql.language.InterfaceTypeDefinition
import graphql.language.NonNullType
import graphql.language.TypeName
import graphql.schema.idl.SchemaParser
import org.junit.jupiter.api.Test

class SchemaExpanderTests {
    private val defaultSchema = """
        directive @arangoCollection(name: String!) on OBJECT
        directive @hasMetadata on OBJECT
        directive @cmsObject on OBJECT
        directive @tenantScoped on OBJECT
        
        type Product implements Node @arangoCollection(name: "product") @hasMetadata @cmsObject @tenantScoped {
            id: ID!
            title: String!
            description: HTML!
        }
        
        scalar HTML
        scalar DateTime
    """.trimIndent()

    @Test
    fun shouldAddNodeIntoSchema() {
        val schemaExpander = ArangoGraphqlEngine()

        val typeRegistry = SchemaParser().parse(defaultSchema)

        val output = schemaExpander.registry(typeRegistry)

        assert(output.types()["Node"] != null)

        assert(
            ((output
                .types()["Node"] as InterfaceTypeDefinition).fieldDefinitions.find { it.name == "id" }) != null
        )
    }

    @Test
    fun shouldUnwrapNonNullType() {
        val schemaExpander = ArangoGraphqlEngine()

        val test = NonNullType(TypeName("String"))
        val expect1 = schemaExpander.unwrapNonNull(test)
        assert((expect1 as TypeName).name == "String")

        val test1 = TypeName("String")
        val expect2 = schemaExpander.unwrapNonNull(test1)
        assert((expect2 as TypeName).name == "String")
    }

}
