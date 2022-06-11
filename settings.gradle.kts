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
    ":libs:anthaathi-common-node-bom",
    ":libs:anthaathi-web-lib",
    ":libs:anthaathi-form-builder",
    ":libs:anthaathi-form-baseui",
    ":libs:anthaathi-json-in-action",
)

include(
    ":apps:anthaathi-commerce-mobile-client",
    ":apps:anthaathi-commerce-web-client"
)

include(
    ":tools:node-tooling"
)

include(":apps:anthaathi-common-graphql-engine")
