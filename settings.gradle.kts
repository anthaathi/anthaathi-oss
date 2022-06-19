pluginManagement {
    val quarkusPluginVersion: String by settings
    val quarkusPluginId: String by settings

    repositories {
        mavenLocal()
        mavenCentral()
        gradlePluginPortal()
    }
    plugins {
        id(quarkusPluginId) version quarkusPluginVersion
    }
}

rootProject.name = "anthaathi"

include(
    ":libs:anthaathi-arango-query-builder"
)

include(
    ":apps:anthaathi-commerce-mobile-client",
)

include(
    ":tools:node-tooling"
)

include(":apps:anthaathi-common-graphql-engine")
