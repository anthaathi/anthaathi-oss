import com.github.gradle.node.yarn.task.YarnTask

buildscript {
    repositories {
        mavenCentral()
        mavenLocal()
    }
}

plugins {
    kotlin("jvm") version Versions.KOTLIN_VERSION
    kotlin("plugin.allopen") version Versions.KOTLIN_VERSION
    id("io.quarkus") apply false
    id("com.github.node-gradle.node") version "3.3.0"
    id("fr.stardustenterprises.rust.wrapper") version "3.2.4" apply false

    id("org.springframework.boot") version "2.7.1" apply false
    id("io.spring.dependency-management") version "1.0.11.RELEASE" apply false
    kotlin("plugin.spring") version "1.6.21" apply false
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

val quarkusCommonProjects = listOf<Project>()

val quarkusWebAppDeps = mapOf<Project, List<Project>>()

// This needs to be calculated in future
val libraryDeps = mapOf<Project, List<Project>>()

val webClients = listOf<Project>()

val webLibraries = listOf<Project>()

val reactNativeApps = listOf(
    project(":apps:anthaathi-commerce-mobile-client")
)

val kotlinLibraries = listOf<Project>()


val springBoot = listOf(project(":apps:anthaathi-graphql-engine"))

configure(subprojects.filter { it in springBoot }) {
    apply {
        plugin("org.springframework.boot")
        plugin("io.spring.dependency-management")
        plugin("org.jetbrains.kotlin.jvm")
        plugin("org.jetbrains.kotlin.plugin.spring")
        plugin("org.springframework.boot")
        plugin("io.spring.dependency-management")
    }

    java.sourceCompatibility = JavaVersion.VERSION_11

    repositories {
        mavenCentral()
    }
}

// Quarkus configuration
configure(subprojects.filter { it in quarkusCommonProjects }) {
    apply {
        plugin("org.jetbrains.kotlin.jvm")
        plugin("org.jetbrains.kotlin.plugin.allopen")
        plugin("io.quarkus")
    }

    tasks.register("buildDocker") {
        // This build the frontend application and move it to the build
        // folder so one container can have frontend and backend
        if (quarkusWebAppDeps.containsKey(this.project)) {
            val fileProjectPath = File(this.project.projectDir, "src/main/resources/META-INF/resources").toString()

            quarkusWebAppDeps[this.project]?.forEach { itt ->
                val moveFileTaskName = "${ this.project.name }-${ itt.name }moveFile"

                val task = itt.tasks.register<Copy>(moveFileTaskName) {
                    doFirst {
                        mkdir(fileProjectPath)
                    }
                    from(File(this.project.projectDir, "dist").toString())
                    into(fileProjectPath)

                    dependsOn("buildProd")
                }

                dependsOn.add(task)
            }
        }

        finalizedBy(tasks.build)
    }

    dependencies {
        implementation(enforcedPlatform("${quarkusPlatformGroupId}:${quarkusPlatformArtifactId}:${quarkusPlatformVersion}"))
        implementation("io.quarkus:quarkus-kotlin")
        implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
        implementation("io.quarkus:quarkus-arc")
        implementation("io.quarkus:quarkus-resteasy-reactive")

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

configure(subprojects.filter { it in reactNativeApps }) {
    apply {
        plugin("com.github.node-gradle.node")
    }

    tasks.register<YarnTask>("i18nBuild") {
        args.set(listOf("i18n"))
    }

    tasks.register<YarnTask>("relay") {
        args.set(listOf("relay"))
    }

    tasks.register<YarnTask>("lint") {
        args.set(listOf("lint"))
    }

    tasks.register<YarnTask>("postinstall") {
        dependsOn("i18nBuild", "relay")
    }

    tasks.register<YarnTask>("test") {
        dependsOn("postinstall")

        args.set(listOf("test", "--coverage", "--coverageReporters=lcov"))
    }
}

configure(subprojects.filter { it in kotlinLibraries }) {
    apply {
        plugin("org.jetbrains.kotlin.jvm")
        plugin("org.jetbrains.kotlin.plugin.allopen")
    }

    dependencies {
        implementation(platform("org.jetbrains.kotlin:kotlin-bom"))
        implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
        testImplementation("org.jetbrains.kotlin:kotlin-test")
        testImplementation("org.jetbrains.kotlin:kotlin-test-junit")
    }
}
