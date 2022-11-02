package org.anthaathi.commerce.product.factory

import org.anthaathi.commerce.product.entity.Product
import org.anthaathi.common.ProductVariant

class ProductFactory {
    companion object {
        fun fromEntity(entity: Product): org.anthaathi.common.Product {
            val variants = entity.productVariants.map {
                ProductVariant.newBuilder()
                    .setId(it.id.toString())
                    .setBarcode(it.barcode.orEmpty())
                    .setOrigin(it.origin.orEmpty())
                    .setPackaging(it.packaging.toString())
                    .setPosition(it.position ?: 0)
                    .setPurchaseNote(it.purchaseNote)
                    .setSku(it.sku)
                    .setWeightUnit(it.weightUnit)
                    .setTaxable(it.taxable == true)
                    .setTitle(it.productVariantTranslations.singleOrNull()?.title.orEmpty())
                    .build()
            }

            val title = entity.productTranslations.singleOrNull()

            return org.anthaathi.common.Product.newBuilder()
                .setId(entity.id.toString())
                .setVendor(entity.vendor.orEmpty())
                .setTitle(title?.title.orEmpty())
                .addAllVariant(variants)
                .setDescription(title?.description.orEmpty())
                .setHandle(entity.handle.orEmpty())
                .build()
        }
    }
}
