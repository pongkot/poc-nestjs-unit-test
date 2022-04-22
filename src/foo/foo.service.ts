import { Injectable } from '@nestjs/common';

@Injectable()
export class FooService {
  getFoo(): string {
    return 'foo';
  }
}
