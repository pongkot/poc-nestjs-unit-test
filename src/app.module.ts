import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FooModule } from './foo/foo.module';
import { BarModule } from './bar/bar.module';
import { BazzModule } from './bazz/bazz.module';

@Module({
  imports: [FooModule, BarModule, BazzModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
