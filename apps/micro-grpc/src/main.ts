import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'app',
        protoPath: join(__dirname, '../../../apps/micro-grpc/src/app.proto'),
      },
    },
  );
  const logger = new Logger('MICRO GRPC');

  await app.listen(() => {
    logger.log(`Running at ...???`)
  });
}
bootstrap();
