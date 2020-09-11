import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class MathService {

  constructor(
    @Inject('MATH_SERVICE_TCP') private clientTCP: ClientProxy,
    @Inject('MATH_SERVICE_REDIS') private clientREDIS: ClientProxy,
  ) {}

  accumulate(payload: number[]): Observable<number> {
    const pattern = { cmd: 'add' };
    // return this.clientTCP.send<number>(pattern, payload);
    return this.clientREDIS.send<number>(pattern, payload);
  }
}
