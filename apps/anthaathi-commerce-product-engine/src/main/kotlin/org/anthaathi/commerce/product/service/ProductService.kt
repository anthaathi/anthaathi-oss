package org.anthaathi.commerce.product.service

import org.anthaathi.commerce.product.factory.ProductFactory
import org.anthaathi.commerce.product.repository.ProductRepository
import org.anthaathi.common.GetProductByIDRequest
import org.anthaathi.common.GetProductByIDsRequest
import org.anthaathi.common.Product
import org.anthaathi.common.Products
import java.util.*
import javax.enterprise.context.ApplicationScoped
import javax.inject.Inject

@ApplicationScoped
class ProductService(
    @Inject
    var productRepository: ProductRepository,
) {
    fun getProductByID(request: GetProductByIDRequest): Product? {
        val locale = request.locale
        val currency = request.currency
        val productId = request.request.id

        val product = productRepository.findById(UUID.fromString(productId), locale, currency) ?: return null

        return ProductFactory.fromEntity(product)
    }

    fun getProductByIDs(request: GetProductByIDsRequest): Products {
        val locale = request.locale
        val currency = request.currency

        val products = productRepository.findByIds(request.requestList.map { UUID.fromString(it.id) }, locale, currency).map {
            ProductFactory.fromEntity(it)
        }

        return Products.newBuilder()
            .addAllProduct(products)
            .build()
    }
}
