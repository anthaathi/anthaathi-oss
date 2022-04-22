plugins {
    `kotlin-dsl`
    id("com.github.node-gradle.node") version "3.2.1"
}

repositories {
    mavenCentral()
}

tasks.getByName("build").dependsOn.add(
    tasks.getByName("yarn")
)
