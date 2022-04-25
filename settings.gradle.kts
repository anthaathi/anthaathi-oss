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

include("anthaathi-cms")
include("anthaathi-cms-web-client")
include("anthaathi-common-node-bom")
include("anthaathi-web-lib")
include("anthaathi-crm-web-client")
