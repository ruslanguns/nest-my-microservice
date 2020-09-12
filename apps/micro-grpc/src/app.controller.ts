import { Controller } from '@nestjs/common';
import { MathService } from './math.service';
import { GrpcMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface INumberArray {
  data: number[];
}
interface ISumOfNumberArray {
  sum: number;
}

@Controller()
export class AppController {
  constructor(private readonly mathService: MathService) {}

  @GrpcMethod('AppController')
  accumulate(
    numberArray: INumberArray,
    metadata: any
  ): ISumOfNumberArray {
    return {
      sum: this.mathService.accumulate(numberArray.data)
    }
  }
}
