import { Injectable } from '@nestjs/common';
import { of, Observable } from 'rxjs';

@Injectable()
export class MathService {

  public accumulate(data: number[]): Observable<number> {
    return of((data || []).reduce((a, b) => Number(a) + Number(b)));
  }
}
