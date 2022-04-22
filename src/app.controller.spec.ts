import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BarModule } from './bar/bar.module';
import { BarService } from './bar/bar.service';
import { BazzModule } from './bazz/bazz.module';
import { BazzService } from './bazz/bazz.service';
import { FooModule } from './foo/foo.module';

describe('AppController', () => {
  let appController: AppController;
  let barService: BarService;
  let bazzService: BazzService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [FooModule, BarModule, BazzModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    barService = app.get<BarService>(BarService);
    bazzService = app.get<BazzService>(BazzService);
  });

  describe('root', () => {
    it('should return "Hello World! foo BAR BaZ"', () => {
      jest.spyOn(barService, 'getBar').mockImplementation(() => 'BAR');
      jest.spyOn(bazzService, 'getBazz').mockImplementation(() => 'BaZ');

      expect(appController.getHello()).toBe('Hello World! foo BAR BaZ');
    });
  });
});
