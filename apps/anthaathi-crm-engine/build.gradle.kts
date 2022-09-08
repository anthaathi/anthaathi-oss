import com.netflix.graphql.dgs.codegen.gradle.GenerateJavaTask
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    id("org.springframework.boot") version "2.7.3"
    id("io.spring.dependency-management") version "1.0.13.RELEASE"
    kotlin("jvm") version "1.6.21"
    kotlin("plugin.spring") version "1.6.21"
    kotlin("plugin.jpa") version "1.6.21"
    id("com.netflix.dgs.codegen") version "5.1.17"
}

group = "org.anthaathi"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_11

repositories {
    mavenCentral()
}

extra["testcontainersVersion"] = "1.17.3"

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("me.paulschwarz:spring-dotenv:2.5.4")
    implementation("org.flywaydb:flyway-core")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    testImplementation("org.junit.jupiter:junit-jupiter:5.8.1")
    developmentOnly("org.springframework.boot:spring-boot-devtools")
    runtimeOnly("com.h2database:h2")
    runtimeOnly("org.postgresql:postgresql")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("org.testcontainers:junit-jupiter")
    testImplementation("org.testcontainers:postgresql")

    implementation(platform("com.netflix.graphql.dgs:graphql-dgs-platform-dependencies:5.2.1"))
    implementation("com.netflix.graphql.dgs:graphql-dgs-spring-boot-starter")
    implementation("com.netflix.graphql.dgs:graphql-dgs-pagination")
    implementation("com.netflix.graphql.dgs:graphql-dgs-extended-scalars")
}

dependencyManagement {
    imports {
        mavenBom("org.testcontainers:testcontainers-bom:${property("testcontainersVersion")}")
    }
}

tasks.withType<KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs = listOf("-Xjsr305=strict")
        jvmTarget = "11"
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}

tasks.withType<GenerateJavaTask> {
    schemaPaths = mutableListOf("${projectDir}/src/main/resources/schema")
    packageName = "org.anthaathi.crm"
    typeMapping = mutableMapOf(
        "OrganizationConnection" to "graphql.relay.Connection<org.anthaathi.crm.types.Organization>",
        "TeamConnection" to "graphql.relay.Connection<org.anthaathi.crm.types.Team>",
        "UserConnection" to "graphql.relay.Connection<org.anthaathi.crm.types.User>",
        "TeamMemberConnection" to "graphql.relay.Connection<org.anthaathi.crm.types.TeamMember>",
        "ProjectConnection" to "graphql.relay.Connection<org.anthaathi.crm.types.Project>",
        "SpaceConnection" to "graphql.relay.Connection<org.anthaathi.crm.types.Space>",
        "TaskConnection" to "graphql.relay.Connection<org.anthaathi.crm.types.Task>",
        "TaskStageConnection" to "graphql.relay.Connection<org.anthaathi.crm.types.TaskStage>",
        "DocumentConnection" to "graphql.relay.Connection<org.anthaathi.crm.types.Document>",
        "StatusConnection" to "graphql.relay.Connection<org.anthaathi.crm.types.Status>",
        "TemplateConnection" to "graphql.relay.Connection<org.anthaathi.crm.types.Template>",
        "CustomerConnection" to "graphql.relay.Connection<org.anthaathi.crm.types.Customer>",
        "AddressConnection" to "graphql.relay.Connection<org.anthaathi.crm.types.Address>",
        "ProfilePictureConnection" to "graphql.relay.Connection<org.anthaathi.crm.types.ProfilePicture>",
        "CustomerMetaConnection" to "graphql.relay.Connection<org.anthaathi.crm.types.CustomerMeta>",
        "CustomerOrganizationConnection" to "graphql.relay.Connection<org.anthaathi.crm.types.CustomerOrganization>",
        "CustomerOrganizationInfoConnection" to "graphql.relay.Connection<org.anthaathi.crm.types.CustomerOrganizationInfo>",
        "TaskTagConnection" to "graphql.relay.Connection<org.anthaathi.crm.types.TaskTag>",
        "TaskCommentConnection" to "graphql.relay.Connection<org.anthaathi.crm.types.TaskComment>",
        "JSON" to "Any",
    )
}
