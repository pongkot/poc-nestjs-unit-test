import { Module } from '@nestjs/common';
import { BazzService } from './bazz.service';

@Module({
  providers: [BazzService],
  exports: [BazzService],
})
export class BazzModule {}
