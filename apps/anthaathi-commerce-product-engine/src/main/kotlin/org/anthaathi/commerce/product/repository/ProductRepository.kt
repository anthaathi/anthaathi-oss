package org.anthaathi.commerce.product.repository

import io.quarkus.hibernate.orm.panache.kotlin.PanacheRepositoryBase
import org.anthaathi.commerce.product.entity.Product
import java.util.*
import javax.enterprise.context.ApplicationScoped

@ApplicationScoped
class ProductRepository : PanacheRepositoryBase<Product, UUID> {
    fun findById(id: UUID, locale: String, currency: String): Product? {
        return find(
        """
            from Product p
                    inner join fetch p.productTranslations prod_translations
                    inner join fetch p.productVariants prod_variants
                    inner join fetch prod_variants.productVariantPricings prod_variant_pricings
            where
                p.status = 'published' and
                p.id = ?1 and
                prod_variant_pricings.currency = ?2 and
                prod_translations.language = ?3
        """.trimIndent(), id, currency, locale)
            .firstResult()
    }

    fun findByIds(id: List<UUID>, locale: String, currency: String): List<Product> {
        return find(
            """
            from Product p
                    inner join fetch p.productTranslations prod_translations
                    inner join fetch p.productVariants prod_variants
                    inner join fetch prod_variants.productVariantPricings prod_variant_pricings
            where
                p.status = 'published' and
                p.id in ?1 and
                prod_variant_pricings.currency = ?2 and
                prod_translations.language = ?3
        """.trimIndent(), id, currency, locale)
            .list()
    }
}
