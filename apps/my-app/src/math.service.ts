import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc, ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { IGrpcService } from './grpc.interface';

@Injectable()
export class MathService implements OnModuleInit {
  private grpcService: IGrpcService;
  
  constructor(
    @Inject('MATH_SERVICE_TCP') private clientTCP: ClientProxy,
    @Inject('MATH_SERVICE_REDIS') private clientREDIS: ClientProxy,
    @Inject('MATH_SERVICE_GRPC') private clientGrpc: ClientGrpc,
  ) {}

  onModuleInit() {
    this.grpcService = this.clientGrpc.getService<IGrpcService>('AppController');
  }

  accumulate(payload: number[]): Observable<number> {
    const pattern = { cmd: 'add' };
    // return this.clientTCP.send<number>(pattern, payload);
    // return this.clientREDIS.send<number>(pattern, payload);
    return this.grpcService.accumulate({ data: payload });
  }
}
