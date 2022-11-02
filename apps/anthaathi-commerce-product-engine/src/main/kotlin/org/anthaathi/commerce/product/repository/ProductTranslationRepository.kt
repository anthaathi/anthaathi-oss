package org.anthaathi.commerce.product.repository;

import io.quarkus.hibernate.orm.panache.kotlin.PanacheRepositoryBase
import org.anthaathi.commerce.product.entity.ProductTranslation
import java.util.UUID
import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class ProductTranslationRepository : PanacheRepositoryBase<ProductTranslation, UUID> {
    fun findByProductId(id: UUID, locale: String): ProductTranslation {
        return find("product_id = ?1 and languages_code = ?2 and p.status = 'active'", id, locale).singleResult()
    }
}
