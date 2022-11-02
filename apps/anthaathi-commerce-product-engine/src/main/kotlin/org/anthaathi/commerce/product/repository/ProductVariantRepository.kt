package org.anthaathi.commerce.product.repository

import io.quarkus.hibernate.orm.panache.kotlin.PanacheRepositoryBase
import org.anthaathi.commerce.product.entity.ProductVariant
import java.util.*
import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class ProductVariantRepository : PanacheRepositoryBase<ProductVariant, UUID> {
    fun findByIds(ids: List<UUID>, productId: UUID, locale: String): List<ProductVariant> {
        if (ids.isEmpty()) {
            return find(
                """
                from ProductVariant p left join fetch p.productVariantTranslations
                where
                    p.productId = ?1 and
                    p.status = 'active'
            """.trimIndent(),
                productId,
            ).list()
        }

        return find("""
            from ProductVariant p left join fetch p.productVariantTranslations
            where
                p.id in ?1 and 
                p.productId = ?2 and
                p.status = 'active'
        """.trimIndent(), ids, productId)
            .list()
    }
}
