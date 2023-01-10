import { Test, TestingModule } from '@nestjs/testing';
import { MonthlyClosureController } from './monthlyclosure.controller';
import { MonthlyClosureService } from './monthlyclosure.service';

describe('MonthlyClosureController', () => {
  let controller: MonthlyClosureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonthlyClosureController],
      providers: [MonthlyClosureService],
    }).compile();

    controller = module.get<MonthlyClosureController>(MonthlyClosureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
