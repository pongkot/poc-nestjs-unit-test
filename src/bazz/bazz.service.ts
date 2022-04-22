import { Injectable } from '@nestjs/common';

@Injectable()
export class BazzService {
  getBazz(): string {
    return 'bazz';
  }
}
