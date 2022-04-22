import { Injectable } from '@nestjs/common';

@Injectable()
export class BarService {
  getBar(): string {
    return 'bar';
  }
}
