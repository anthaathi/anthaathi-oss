package org.anthaathi.crm.utils

import graphql.relay.Relay
import java.net.URI
import java.util.*

class IdGenerator {
    companion object {
        /**
         * Takes a type name and an ID specific to that type name, and returns a
         * "global ID" that is unique among all types.
         */
        @JvmStatic
        fun toGlobalId(type: String, id: String): String {
            val encoder: Base64.Encoder = Base64.getEncoder()
            return encoder.encodeToString("anthaathi://${ type }/${ java.net.URLEncoder.encode(id, "utf-8") }".toByteArray())
        }

        /**
         * Takes the "global ID" created by toGlobalID, and returns the type name and ID
         * used to create it.
         */
        @JvmStatic
        fun fromGlobalId(globalId: String): Relay.ResolvedGlobalId {
            val decoder: Base64.Decoder = Base64.getDecoder()
            val decoded = String(decoder.decode(globalId))

            val path = URI.create(decoded)

            return Relay.ResolvedGlobalId(
                path.host,
                java.net.URLDecoder.decode(path.path.replaceFirst("/", ""), "utf-8")
            );
        }
    }
}
