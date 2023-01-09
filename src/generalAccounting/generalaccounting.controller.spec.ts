import { Test, TestingModule } from '@nestjs/testing';
import { GeneralAccountingController } from './generalaccounting.controller';
import { GeneralAccountingService } from './generalaccounting.service';

describe('GeneralAccountingController', () => {
  let controller: GeneralAccountingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneralAccountingController],
      providers: [GeneralAccountingService],
    }).compile();

    controller = module.get<GeneralAccountingController>(GeneralAccountingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
