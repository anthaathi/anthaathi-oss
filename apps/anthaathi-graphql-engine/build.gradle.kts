group = "org.anthaathi"
version = "0.0.1-SNAPSHOT"

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    annotationProcessor("org.springframework.boot:spring-boot-configuration-processor")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    developmentOnly("org.springframework.boot:spring-boot-devtools")
    implementation(platform("com.netflix.graphql.dgs:graphql-dgs-platform-dependencies:latest.release"))
    implementation("com.netflix.graphql.dgs:graphql-dgs-spring-boot-starter")
    implementation("com.netflix.graphql.dgs:graphql-dgs-extended-scalars")
    implementation("com.netflix.graphql.dgs:graphql-dgs-pagination")

    // https://mvnrepository.com/artifact/com.arangodb/arangodb-java-driver
    implementation("com.arangodb:arangodb-java-driver:6.18.0")

    // https://mvnrepository.com/artifact/org.apache.commons/commons-text
    implementation("org.apache.commons:commons-text:1.9")


    // In this case we are using the JUnit5 testing framework
    testImplementation("io.github.origin-energy:java-snapshot-testing-junit5:3.2.+")

    // Many will want to serialize into JSON.  In this case you should also add the Jackson plugin
    testImplementation("io.github.origin-energy:java-snapshot-testing-plugin-jackson:3.2.+")
    testImplementation("com.fasterxml.jackson.core:jackson-core:2.11.3")
    testImplementation("com.fasterxml.jackson.core:jackson-databind:2.11.3")
    testImplementation("com.fasterxml.jackson.datatype:jackson-datatype-jdk8:2.11.3")
    testImplementation("com.fasterxml.jackson.datatype:jackson-datatype-jsr310:2.11.3")

    // slf4j logging implementation if you don't already have one
    testImplementation("org.slf4j:slf4j-simple:2.0.0-alpha0")

    // TODO: THIS LIBRARY NEEDS TO CHANGE
    // https://mvnrepository.com/artifact/io.zeko/zeko-sql-builder
    implementation("io.zeko:zeko-sql-builder:1.4.0")
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs = listOf("-Xjsr305=strict")
        jvmTarget = "1.8"
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}

configurations {
    compileOnly {
        extendsFrom(configurations.annotationProcessor.get())
    }
}
