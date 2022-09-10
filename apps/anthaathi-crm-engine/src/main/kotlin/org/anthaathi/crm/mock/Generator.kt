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
        fun createOrganization(dfe: DataFetchingEnvironment, depth: Int = 0): Connection<Organization>? {
            if (depth == 30) {
                return null
            }
            val result = organizations
                .map { it.copy(defaultProject = createProject(dfe, depth = depth + 1)?.edges?.get(0)?.node) }
                .toList()

            return SimpleListConnection(result).get(dfe)
        }

        fun createSpace(dfe: DataFetchingEnvironment, depth: Int = 0): Connection<Space>? {
            if (depth == 30) {
                return null
            }
            return SimpleListConnection(space.map {
                it.copy(
                    tasks = createTask(dfe, depth = depth + 1), tasksByStatuses = SimpleListConnection(
                        listOf(
                            TaskByStatus(
                                status = Status(
                                    IdGenerator.toGlobalId("TaskStatus", "1234"),
                                    name = "In Progress",
                                    createdAt = OffsetDateTime.now()
                                ),
                                tasks = SimpleListConnection(
                                    listOf(
                                        Task(
                                            id = IdGenerator.toGlobalId("Task", "12412"),
                                            title = "Task 1",
                                            description = "lorem ipsum",
                                            dueDate = OffsetDateTime.now().plusDays(2),
                                            priority = 1,
                                            createdAt = OffsetDateTime.now()
                                        ),
                                        Task(
                                            id = IdGenerator.toGlobalId("Task", "124112"),
                                            title = "Task 2",
                                            description = "lorem ipsum",
                                            dueDate = OffsetDateTime.now().plusDays(2),
                                            priority = 1,
                                            createdAt = OffsetDateTime.now()
                                        ),
                                    )
                                ).get(dfe),
                                id = IdGenerator.toGlobalId("TaskByStatus", "1234"),
                            ),
                            TaskByStatus(
                                status = Status(
                                    IdGenerator.toGlobalId("TaskStatus", "12312"),
                                    name = "In Progress",
                                    createdAt = OffsetDateTime.now()
                                ),
                                tasks = createTask(dfe, 30),
                                id = IdGenerator.toGlobalId("TaskByStatus", "12312"),
                            ),
                            TaskByStatus(
                                status = Status(
                                    IdGenerator.toGlobalId("TaskStatus", "121212312"),
                                    name = "In Progress",
                                    createdAt = OffsetDateTime.now()
                                ),
                                tasks = createTask(dfe, 30),
                                id = IdGenerator.toGlobalId("TaskByStatus", "121212312"),
                            ),
                            TaskByStatus(
                                status = Status(
                                    IdGenerator.toGlobalId("TaskStatus", "12121234312"),
                                    name = "In Progress",
                                    createdAt = OffsetDateTime.now()
                                ),
                                tasks = createTask(dfe, 30),
                                id = IdGenerator.toGlobalId("TaskByStatus", "12121234312"),
                            ),
                            TaskByStatus(
                                status = Status(
                                    IdGenerator.toGlobalId("TaskStatus", "126312"),
                                    name = "In Progress",
                                    createdAt = OffsetDateTime.now()
                                ),
                                tasks = createTask(dfe, 30),
                                id = IdGenerator.toGlobalId("TaskByStatus", "126312"),
                            ),
                        )
                    ).get(dfe)
                )
            }).get(dfe)
        }

        fun createTask(dfe: DataFetchingEnvironment, depth: Int = 0): Connection<Task>? {
            if (depth == 30) {
                return null
            }
            return SimpleListConnection(
                listOf(
                    Task(
                        id = IdGenerator.toGlobalId("Task", "12412"),
                        title = "Task 1",
                        description = "lorem ipsum",
                        dueDate = OffsetDateTime.now().plusDays(2),
                        priority = 1,
                        reportedBy = createUser(dfe, depth = depth + 1)?.edges?.get(0)?.node,
                        assigned = createUser(dfe, depth = depth + 1),
                        taskStages = createTaskStages(dfe, depth = depth + 1),
                        createdAt = OffsetDateTime.now()
                    ),
                    Task(
                        id = IdGenerator.toGlobalId("Task", "124112"),
                        title = "Task 2",
                        description = "lorem ipsum",
                        dueDate = OffsetDateTime.now().plusDays(2),
                        priority = 1,
                        reportedBy = createUser(dfe, depth = depth + 1)?.edges?.get(0)?.node,
                        assigned = createUser(dfe, depth = depth + 1),
                        taskStages = createTaskStages(dfe, depth = depth + 1),
                        createdAt = OffsetDateTime.now()
                    ),
                )
            ).get(dfe)
        }

        fun createTaskStages(dfe: DataFetchingEnvironment, depth: Int = 0): Connection<TaskStage>? {
            if (depth == 30) {
                return null
            }
            return SimpleListConnection(
                listOf(
                    TaskStage(
                        id = IdGenerator.toGlobalId("TaskStage", "198726190827"),
                        title = "somerandom task",
                        comments = createComments(dfe, depth = depth + 1),
                        createdAt = OffsetDateTime.now()
                    )
                )
            ).get(dfe)
        }

        fun createComments(dfe: DataFetchingEnvironment, depth: Int = 0): Connection<TaskComment>? {
            if (depth == 30) {
                return null
            }
            return SimpleListConnection(
                listOf(
                    TaskComment(
                        id = IdGenerator.toGlobalId("TaskComment", "129087"),
                        content = "lorem ipsum",
                        createdAt = OffsetDateTime.now(),
                    ),
                ),
            ).get(dfe)
        }

        fun createUser(
            dfe: DataFetchingEnvironment,
            organization: Connection<Organization>? = null,
            depth: Int = 0,
        ): Connection<User>? {
            if (depth == 30) {
                return null
            }
            return SimpleListConnection(
                Collections.singletonList(
                    User(
                        id = IdGenerator.toGlobalId("User", "123"),
                        displayName = "Omkar Yadav",
                        email = "omkar@anthaathi.org",
                        phoneNumber = MobileNumber(91, "12X19820198"),
                        organizations = organization,
                        defaultOrganization = createOrganization(dfe, depth = depth + 1)?.edges?.get(0)?.node,
                        createdAt = OffsetDateTime.now(),
                    )
                )
            ).get(dfe)
        }

        fun createProject(dfe: DataFetchingEnvironment, depth: Int = 0): Connection<Project>? {
            if (depth == 30) {
                return null
            }
            return SimpleListConnection(
                listOf(
                    Project(
                        id = IdGenerator.toGlobalId(
                            "Project",
                            "1234"
                        ),
                        name = "Something amazing Space name",
                        description = "Something amazing",
                        spaces = createSpace(dfe, depth = depth + 1),
                        createdAt = OffsetDateTime.now()
                    )
                )
            ).get(dfe)
        }

        private val projects = listOf(
            Project(
                id = IdGenerator.toGlobalId("Project", "1"),
                name = "Project 1",
                createdAt = OffsetDateTime.now()
            ),
        )

        private val organizations = listOf(
            Organization(
                id = IdGenerator.toGlobalId("Organization", "1"),
                name = "Anthathi Private Limited",
                defaultProject = projects[0],
                createdAt = OffsetDateTime.now()
            ),
        )

        private val users = listOf(
            User(
                id = IdGenerator.toGlobalId("User", "1"),
                displayName = "Omkar Yadav",
                email = "omkar@anthaathi.org",
                phoneNumber = MobileNumber(91, "12X19820198"),
                createdAt = OffsetDateTime.now()
            ),
        )

        private val comments = listOf(
            TaskComment(
                id = IdGenerator.toGlobalId("TaskComment", "1"),
                content = "lorem ipsum",
                createdAt = OffsetDateTime.now()
            )
        )

        private val tasks = listOf(
            Task(
                id = IdGenerator.toGlobalId("Task", "1"),
                title = "Task 1",
                description = "lorem ipsum",
                dueDate = OffsetDateTime.now().plusDays(2),
                priority = 1,
                createdAt = OffsetDateTime.now()
            )
        )

        private val space = listOf(
            Space(
                id = IdGenerator.toGlobalId("Space", "1234"),
                name = "Something amazing",
                createdAt = OffsetDateTime.now()
            )
        )
    }
}
