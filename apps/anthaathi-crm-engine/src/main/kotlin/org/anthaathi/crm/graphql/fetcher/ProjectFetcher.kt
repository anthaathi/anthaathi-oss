package org.anthaathi.crm.graphql.fetcher

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.services.ProjectService
import org.anthaathi.crm.types.Project
import org.springframework.beans.factory.annotation.Autowired


@DgsComponent
class ProjectFetcher(
    @Autowired val projectService: ProjectService,
) {
    @DgsData(parentType = DgsConstants.ORGANIZATION.TYPE_NAME, field = DgsConstants.ORGANIZATION.DefaultProject)
    fun getProjectForOrganization(): Project? {
        return null
    }
}
