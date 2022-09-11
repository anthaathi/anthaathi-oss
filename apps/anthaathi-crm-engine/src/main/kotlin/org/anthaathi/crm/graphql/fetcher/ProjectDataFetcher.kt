package org.anthaathi.crm.graphql.fetcher

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import graphql.relay.Connection
import graphql.schema.DataFetchingEnvironment
import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.database.entity.ProjectEntity
import org.anthaathi.crm.graphql.relay.EntityConnection
import org.anthaathi.crm.services.ProjectService
import org.anthaathi.crm.types.Organization
import org.anthaathi.crm.types.Project
import org.springframework.beans.factory.annotation.Autowired
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext


@DgsComponent
class ProjectDataFetcher(
    @Autowired private val projectService: ProjectService,
    @PersistenceContext private val em: EntityManager
) {
    @DgsData(parentType = DgsConstants.ORGANIZATION.TYPE_NAME, field = DgsConstants.ORGANIZATION.Projects)
    fun organizationProject(dfe: DataFetchingEnvironment): Connection<Project> {
        val organization: Organization = dfe.getSource<Organization>()

        return EntityConnection(em, ProjectEntity::class.java, projectService.factory)
            .get(dfe)
    }

    @DgsData(parentType = DgsConstants.QUERY_TYPE, field = DgsConstants.QUERY.Projects)
    fun getProjectsForOrganization2(
        dfe: DgsDataFetchingEnvironment
    ): Connection<Project> {
        return EntityConnection(em, ProjectEntity::class.java, projectService.factory).get(dfe)
    }

    @DgsData(parentType = DgsConstants.QUERY_TYPE, field = DgsConstants.QUERY.ProjectByHandle)
    fun getProjectByHandle(
        handle: String
    ): Project? {
        return projectService.findByHandle(handle)
    }
}
