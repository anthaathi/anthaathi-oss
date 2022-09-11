package org.anthaathi.crm

import org.apache.camel.CamelContext
import org.apache.camel.ConsumerTemplate
import org.apache.camel.ProducerTemplate
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class AppConfig(
    @Autowired
    private val camelContext: CamelContext
) {

    @Bean
    fun producerTemplate(): ProducerTemplate {
        return camelContext.createProducerTemplate();
    }

    @Bean
    fun consumerTemplate(): ConsumerTemplate {
        return camelContext.createConsumerTemplate();
    }
}
