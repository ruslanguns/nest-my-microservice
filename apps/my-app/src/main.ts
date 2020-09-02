import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main APP')

  await app.listen(3000);
  logger.log('Ejecutando mi aplicación 3000')
}
bootstrap();
