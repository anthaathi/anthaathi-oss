package org.anthaathi.graphqlengine.scalar

import com.netflix.graphql.dgs.DgsScalar
import graphql.language.StringValue
import graphql.schema.Coercing
import graphql.schema.CoercingParseLiteralException
import graphql.schema.CoercingParseValueException
import graphql.schema.CoercingSerializeException


@DgsScalar(name = "HTML")
class DgsHTML : Coercing<String, String> {
    @Throws(CoercingSerializeException::class)
    override fun serialize(dataFetcherResult: Any): String {
        return if (dataFetcherResult is String) {
            dataFetcherResult
        } else {
            throw CoercingSerializeException("Not a valid HTML")
        }
    }

    @Throws(CoercingParseValueException::class)
    override fun parseValue(input: Any): String {
        return input.toString()
    }

    @Throws(CoercingParseLiteralException::class)
    override fun parseLiteral(input: Any): String {
        if (input is StringValue) {
            return (input).value
        }
        throw CoercingParseLiteralException("Value is not a valid HTML")
    }
}
