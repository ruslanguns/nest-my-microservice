import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.REDIS,
      options: {
        url: 'redis://localhost:6379'
      }
    },
  );
  const logger = new Logger('MICRO REDIS');

  await app.listen(() => {
    logger.log('Ejecutando en el puerto 3002')
  });
}
bootstrap();
