import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3001
      }
    },
  );
  const logger = new Logger('MICRO TCP');

  await app.listen(() => {
    logger.log('Ejecutando en el puerto 3001')
  });
}
bootstrap();
