package org.anthaathi.crm

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaAuditing

@SpringBootApplication
@EnableJpaAuditing
class AnthaathiCrmEngineApplication

fun main(args: Array<String>) {
    runApplication<AnthaathiCrmEngineApplication>(*args)
}
