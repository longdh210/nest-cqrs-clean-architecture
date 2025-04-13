import { Module } from '@nestjs/common';
import { GrpcModule } from './product-catalog/presentation/grpc/grpc.module';

@Module({
  imports: [GrpcModule],
})
export class ProductModule {}
