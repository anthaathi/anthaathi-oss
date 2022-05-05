import com.github.gradle.node.yarn.task.YarnTask

buildscript {
    repositories {
        mavenCentral()
    }
}

plugins {
    kotlin("jvm") version Versions.KOTLIN_VERSION
    kotlin("plugin.allopen") version Versions.KOTLIN_VERSION
    id("io.quarkus") apply false
    id("com.github.node-gradle.node") version "3.2.1"
}

val quarkusPlatformGroupId: String by project
val quarkusPlatformArtifactId: String by project
val quarkusPlatformVersion: String by project

allprojects {
    group = "org.anthaathi"
    version = "1.0-SNAPSHOT"

    repositories {
        mavenCentral()
        mavenLocal()
    }
}

val quarkusCommonProjects = listOf(project(":apps:anthaathi-cms"))

val webClients = listOf(
    // project(":apps:anthaathi-cms-web-client"),
    project(":apps:anthaathi-crm-web-client")
)

val webLibraries = listOf(
    project(":libs:anthaathi-web-lib"),
    project(":libs:anthaathi-form-builder")
)

configure(subprojects.filter { it in quarkusCommonProjects }) {
    apply {
        plugin("org.jetbrains.kotlin.jvm")
        plugin("org.jetbrains.kotlin.plugin.allopen")
        plugin("io.quarkus")
    }

    dependencies {
        implementation(enforcedPlatform("${quarkusPlatformGroupId}:${quarkusPlatformArtifactId}:${quarkusPlatformVersion}"))
        implementation("io.quarkus:quarkus-kotlin")
        implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
        implementation("io.quarkus:quarkus-arc")
        implementation("io.quarkus:quarkus-resteasy-reactive")
        implementation("io.quarkus:quarkus-oidc")
        testImplementation("io.quarkus:quarkus-junit5")
        testImplementation("io.rest-assured:rest-assured")
    }

    allOpen {
        annotation("javax.ws.rs.Path")
        annotation("javax.enterprise.context.ApplicationScoped")
        annotation("io.quarkus.test.junit.QuarkusTest")
    }

    tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
        kotlinOptions.jvmTarget = JavaVersion.VERSION_11.toString()
        kotlinOptions.javaParameters = true
    }

    java {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }
}

configure(subprojects.filter { it in webLibraries }) {
    apply {
        plugin("com.github.node-gradle.node")
    }

    tasks.register<YarnTask>("buildLib") {
        args.set(listOf("build"))
    }

    tasks.register<YarnTask>("lint") {
        args.set(listOf("lint"))
    }

    tasks.register<YarnTask>("test") {
        args.set(listOf("test"))
    }

    tasks.register("check") {
        dependsOn("lint", "test")
    }
}

configure(subprojects.filter { it in webClients }) {
    apply {
        plugin("com.github.node-gradle.node")
    }

    tasks.register<YarnTask>("i18nExtract") {
        args.set(listOf("extract"))
    }

    tasks.register<YarnTask>("i18nCompile") {
        args.set(listOf("compile"))

        dependsOn.add("i18nExtract")
    }

    tasks.register<YarnTask>("runDev") {
        args.set(listOf("dev"))

        dependsOn.add("i18nCompile")

        webLibraries.forEach {
            dependsOn.add(it.tasks.find { task -> task.name == "buildLib" })
        }
    }

    tasks.register<YarnTask>("buildProd") {
        args.set(listOf("build"))

        dependsOn.add("i18nCompile")

        webLibraries.forEach {
            dependsOn.add(it.tasks.find { task -> task.name == "buildLib" })
        }
    }
}
