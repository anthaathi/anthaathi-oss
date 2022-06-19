plugins {
    id("com.avast.gradle.docker-compose") version "0.16.4"
}

dependencies {
    // https://mvnrepository.com/artifact/com.arangodb/arangodb-java-driver
    implementation("com.arangodb:arangodb-java-driver:${ Versions.ARANGO_DB_DRIVER_VERSION }")
    // https://mvnrepository.com/artifact/com.arangodb/jackson-dataformat-velocypack
    implementation("com.arangodb:jackson-dataformat-velocypack:3.0.1")
    implementation("org.junit.jupiter:junit-jupiter:5.8.1")
}

dockerCompose.isRequiredBy(tasks.getByName("test"))
