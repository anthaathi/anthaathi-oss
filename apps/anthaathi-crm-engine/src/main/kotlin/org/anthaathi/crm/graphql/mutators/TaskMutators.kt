package org.anthaathi.crm.graphql.mutators

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsMutation
import com.netflix.graphql.dgs.InputArgument
import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.types.CreateTaskInput
import org.anthaathi.crm.types.CreateTaskResponse
import org.apache.camel.Produce
import org.apache.camel.ProducerTemplate
import org.springframework.beans.factory.annotation.Autowired


@DgsComponent
class TaskMutators(
    @Autowired
    @Produce("direct:createTask")
    private val producerTemplate: ProducerTemplate
) {
    @DgsMutation(field = DgsConstants.MUTATION.CreateTask)
    fun createTask(
        @InputArgument input: CreateTaskInput
    ): CreateTaskResponse {
        val result = producerTemplate
            .requestBody(mapOf<String, String>(), List::class.java)
        return CreateTaskResponse()
    }
}
