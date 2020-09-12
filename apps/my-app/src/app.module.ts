import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathService } from './math.service';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MATH_SERVICE_TCP',
        transport: Transport.TCP,
        options: {
          port: 3001
        }
      },
      {
        name: 'MATH_SERVICE_REDIS',
        transport: Transport.REDIS,
        options: {
          url: 'redis://localhost:6379'
        }
      },
      {
        name: 'MATH_SERVICE_GRPC',
        transport: Transport.GRPC,
        options: {
          package: 'app',
          protoPath: join(__dirname, '../../../apps/my-app/src/app.proto')
        }
      },
    ])
  ],
  controllers: [AppController],
  providers: [
    AppService,
    MathService,
  ],
})
export class AppModule {}
