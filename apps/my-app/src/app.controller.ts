import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { MathService } from './math.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mathService: MathService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('add')
  accumulate(@Body('data') data: number[]) {
    return this.mathService.accumulate(data);
  }
}
