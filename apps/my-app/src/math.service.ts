import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class MathService {

  constructor(
    @Inject('MATH_SERVICE_TCP') private client: ClientProxy,
  ) {}

  accumulate(payload: number[]): Observable<number> {
    const pattern = { cmd: 'add' };
    return this.client.send<number>(pattern, payload);
  }
}
