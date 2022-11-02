package org.anthaathi.commerce.product.grpcservices

import io.quarkus.grpc.GrpcService
import io.smallrye.common.annotation.Blocking
import io.smallrye.common.annotation.NonBlocking
import io.smallrye.mutiny.Uni
import org.anthaathi.commerce.product.service.ProductService
import org.anthaathi.common.*
import org.anthaathi.common.Product
import org.anthaathi.common.ProductGRPCGrpc.ProductGRPCImplBase

@GrpcService
class Product(
    var productService: ProductService,
) : ProductGRPC {
    @Blocking
    override fun getProductByID(request: GetProductByIDRequest?): Uni<Product> {
        return Uni.createFrom().item {
            request?.let { productService.getProductByID(it) }
        }
    }

    @Blocking
    override fun getProductByIDs(request: GetProductByIDsRequest?): Uni<Products> {
        return Uni.createFrom().item {
            request?.let {
                productService.getProductByIDs(request)
            }
        }
    }
}
