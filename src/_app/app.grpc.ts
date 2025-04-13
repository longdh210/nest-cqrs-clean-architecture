import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Configs } from 'src/configs';

export const appGrpcMicroservice: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: `0.0.0.0:${Configs.app.grpcPort || 5001}`,
    package: ['ecom.product_catalog.product'],
    protoPath: join(__dirname, '../proto/product-catalog/product.proto'),
  },
};
