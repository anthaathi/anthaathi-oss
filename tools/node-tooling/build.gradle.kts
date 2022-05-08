group = "org.anthaathi"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
    mavenLocal()
}

apply {
    plugin("com.github.node-gradle.node")
}

tasks.register<com.github.gradle.node.yarn.task.YarnTask>("coverageMerger") {
    args.set(listOf("codecoverage"))
}
