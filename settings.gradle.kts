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
    ":apps:anthaathi-commerce-mobile-client",
    ":apps:anthaathi-crm-web-client",
)

include(
    ":apps:anthaathi-commerce-checkout-engine",
    ":apps:anthaathi-commerce-product-engine",
    ":apps:anthaathi-common-proto",
)

include(
    ":tools:node-tooling"
)
include("apps:anthaathi-common-proto")
findProject(":apps:anthaathi-common-proto")?.name = "anthaathi-common-proto"
