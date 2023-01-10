import { Test, TestingModule } from '@nestjs/testing';
import { MonthlyClosureService } from './monthlyclosure.service';

describe('MonthlyClosureService', () => {
  let service: MonthlyClosureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonthlyClosureService],
    }).compile();

    service = module.get<MonthlyClosureService>(MonthlyClosureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
