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
    ":apps:anthaathi-graphql-engine"
)

include(
    ":apps:anthaathi-commerce-mobile-client",
)

include(
    ":apps:anthaathi-graphql-framework"
)

include(
    ":tools:node-tooling"
)
