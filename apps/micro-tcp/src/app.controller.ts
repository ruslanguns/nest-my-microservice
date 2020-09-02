import { Controller } from '@nestjs/common';
import { MathService } from './math.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly mathService: MathService) {}

  @MessagePattern({ cmd: 'add' })
  accumulate(@Payload() data: number[]): Observable<number> {
    return this.mathService.accumulate(data)
  }
}
