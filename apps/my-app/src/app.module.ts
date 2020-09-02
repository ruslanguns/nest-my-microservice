import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MathService } from './math.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MATH_SERVICE_TCP',
        transport: Transport.TCP,
        options: {
          port: 3001
        }
      }
    ])
  ],
  controllers: [AppController],
  providers: [
    AppService,
    MathService,
  ],
})
export class AppModule {}
