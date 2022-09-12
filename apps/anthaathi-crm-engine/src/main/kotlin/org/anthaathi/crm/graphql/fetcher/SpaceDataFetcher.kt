package org.anthaathi.crm.graphql.fetcher

import com.netflix.graphql.dgs.DgsComponent
import com.netflix.graphql.dgs.DgsData
import graphql.relay.Connection
import graphql.schema.DataFetchingEnvironment
import org.anthaathi.crm.DgsConstants
import org.anthaathi.crm.database.entity.SpaceFolderEntity
import org.anthaathi.crm.graphql.relay.EntityConnection
import org.anthaathi.crm.services.SpaceService
import org.anthaathi.crm.types.Space
import org.springframework.beans.factory.annotation.Autowired
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext


@DgsComponent
class SpaceDataFetcher(
    @Autowired val spaceService: SpaceService,
    @PersistenceContext private val em: EntityManager
) {
    @DgsData(parentType = DgsConstants.PROJECT.TYPE_NAME, field = DgsConstants.PROJECT.Spaces)
    fun projectSpaces(dfe: DataFetchingEnvironment): Connection<Space> {
        return EntityConnection(em, SpaceFolderEntity::class.java, spaceService.factory)
            .get(dfe)
    }
}
