# Proof of Concept

Proof of Concept, How to test service has injected service in many modules

> It's easy to create test in NestJS

```typescript
describe('AppController', () => {
  let appController: AppController;

  // 1. Define your service will mock data to test
  let barService: BarService;
  let bazzService: BazzService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      // 2. Import modules
      imports: [FooModule, BarModule, BazzModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    
    // 3. Get your service to use in test case
    barService = app.get<BarService>(BarService);
    bazzService = app.get<BazzService>(BazzService);
  });

  describe('root', () => {
    it('should return "Hello World! foo BAR BaZ"', () => {
      // 4. spyOn to mock data to method you want
      jest.spyOn(barService, 'getBar').mockImplementation(() => 'BAR');
      jest.spyOn(bazzService, 'getBazz').mockImplementation(() => 'BaZ');

      expect(appController.getHello()).toBe('Hello World! foo BAR BaZ');
    });
  });
});
```