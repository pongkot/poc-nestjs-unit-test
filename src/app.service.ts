import { Injectable } from '@nestjs/common';
import { BarService } from './bar/bar.service';
import { BazzService } from './bazz/bazz.service';
import { FooService } from './foo/foo.service';

@Injectable()
export class AppService {
  constructor(
    private readonly fooService: FooService,
    private readonly barService: BarService,
    private readonly bazzService: BazzService,
  ) {}

  getHello(): string {
    const list = [
      this.fooService.getFoo(),
      this.barService.getBar(),
      this.bazzService.getBazz(),
    ];
    return 'Hello World! ' + list.join(' ');
  }
}
