import { NestFactory } from '@nestjs/core';
import { AppModule } from './_app/app.module';
import { GrpcOptions } from '@nestjs/microservices';
import { appGrpcMicroservice } from './_app/app.grpc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<GrpcOptions>(appGrpcMicroservice);

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
