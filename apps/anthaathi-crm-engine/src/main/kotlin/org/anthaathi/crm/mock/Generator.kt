package org.anthaathi.crm.mock

import graphql.relay.Connection
import graphql.relay.SimpleListConnection
import graphql.schema.DataFetchingEnvironment
import org.anthaathi.crm.types.*
import org.anthaathi.crm.utils.IdGenerator
import java.time.OffsetDateTime
import java.util.*

class Generator {
    companion object {
        fun createOrganization(dfe: DataFetchingEnvironment): Connection<Organization> {
            return SimpleListConnection(organizations).get(dfe)
        }

        fun createSpace(dfe: DataFetchingEnvironment): Connection<Space> {
            return SimpleListConnection(space).get(dfe)
        }

        fun createTask(dfe: DataFetchingEnvironment): Connection<Task> {
            return SimpleListConnection(
                listOf(
                    Task(
                        id = IdGenerator.toGlobalId("Task", "12412"),
                        title = "Task 1",
                        description = "lorem ipsum",
                        dueDate = OffsetDateTime.now().plusDays(2),
                        priority = 1,
                        reportedBy = createUser(dfe).edges[0].node,
                        assigned = createUser(dfe),
                        taskStages = createTaskStages(dfe)
                    ),
                )
            ).get(dfe)
        }

        fun createTaskStages(dfe: DataFetchingEnvironment): Connection<TaskStage> {
            return SimpleListConnection(
                listOf(
                    TaskStage(
                        id = IdGenerator.toGlobalId("TaskStage", "198726190827"),
                        title = "somerandom task",
                        comments = createComments(dfe)
                    )
                )
            ).get(dfe)
        }

        fun createComments(dfe: DataFetchingEnvironment): Connection<TaskComment> {
            return SimpleListConnection(
                listOf(
                    TaskComment(
                        id = IdGenerator.toGlobalId("TaskComment", "129087"),
                        content = "lorem ipsum"
                    ),
                ),
            ).get(dfe)
        }

        fun createUser(
            dfe: DataFetchingEnvironment,
            organization: Connection<Organization>? = null
        ): Connection<User> {
            return SimpleListConnection(
                Collections.singletonList(
                    User(
                        id = IdGenerator.toGlobalId("User", "123"),
                        displayName = "Omkar Yadav",
                        email = "omkar@anthaathi.org",
                        phoneNumber = MobileNumber(91, "12X19820198"),
                        organizations = organization,
                    )
                )
            ).get(dfe)
        }

        fun createProject(dfe: DataFetchingEnvironment): Connection<Project> {
            return SimpleListConnection(
                listOf(
                    Project(
                        id = IdGenerator.toGlobalId(
                            "Project",
                            "1234"
                        ),
                        name = "Something amazing Space name",
                        description = "Something amazing",
                        spaces = createSpace(dfe)
                    )
                )
            ).get(dfe)
        }

        private val organizations = listOf(
            Organization(
                id = IdGenerator.toGlobalId("Organization", "1"),
                name = "Anthathi Private Limited",
            ),
        )

        private val projects = listOf(
            Project(
                id = IdGenerator.toGlobalId("Project", "1"),
                name = "Project 1"
            ),
        )

        private val users = listOf(
            User(
                id = IdGenerator.toGlobalId("User", "1"),
                displayName = "Omkar Yadav",
                email = "omkar@anthaathi.org",
                phoneNumber = MobileNumber(91, "12X19820198"),
            ),
        )

        private val comments = listOf(
            TaskComment(
                id = IdGenerator.toGlobalId("TaskComment", "1"),
                content = "lorem ipsum",
            )
        )

        private val tasks = listOf(
            Task(
                id = IdGenerator.toGlobalId("Task", "1"),
                title = "Task 1",
                description = "lorem ipsum",
                dueDate = OffsetDateTime.now().plusDays(2),
                priority = 1,
            )
        )

        private val space = listOf(
            Space(
                id = IdGenerator.toGlobalId("Space", "1234"),
                name = "Something amazing",
            )
        )
    }
}
