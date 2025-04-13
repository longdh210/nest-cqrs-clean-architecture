import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class ProductController {
  products = [
    {
      productId: 'product 1',
      productSku: '1234567',
      productDescription: 'this is a product',
      productPrice: 0.111,
      productStock: 1111,
    },
    {
      productId: '123abc',
      productSku: '123abc',
      productDescription: 'product ne',
      productPrice: 123,
      productStock: 10,
    },
  ];

  @GrpcMethod('ProductService', 'ListProducts')
  listProducts() {
    return {
      products: this.products,
      pagination: {
        currentPage: 1,
        pageSize: 2,
        totalRecords: 3,
        totalPages: 4,
      },
    };
  }

  @GrpcMethod('ProductService', 'Test')
  test() {
    return {
      test: 'test ne',
    };
  }
}
