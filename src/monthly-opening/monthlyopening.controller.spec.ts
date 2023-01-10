import { Test, TestingModule } from '@nestjs/testing';
import { MonthlyOpeningController } from './monthlyopening.controller';
import { MonthlyOpeningService } from './monthlyopening.service';

describe('MonthlyOpeningController', () => {
  let controller: MonthlyOpeningController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonthlyOpeningController],
      providers: [MonthlyOpeningService],
    }).compile();

    controller = module.get<MonthlyOpeningController>(MonthlyOpeningController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
