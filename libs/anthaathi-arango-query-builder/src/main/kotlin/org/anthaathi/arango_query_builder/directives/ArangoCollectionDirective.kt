package org.anthaathi.arango_query_builder.directives

import org.anthaathi.arango_query_builder.annotations.SchemaDirective
import org.anthaathi.arango_query_builder.annotations.SchemaDirectiveArgument


@SchemaDirective(name = "arangoCollection")
@SchemaDirectiveArgument(name = "collectionName")
class ArangoCollectionDirective {
}
