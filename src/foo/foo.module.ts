import { Module } from '@nestjs/common';
import { FooService } from './foo.service';

@Module({
  providers: [FooService],
  exports: [FooService],
})
export class FooModule {}
