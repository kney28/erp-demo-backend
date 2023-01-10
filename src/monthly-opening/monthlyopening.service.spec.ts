import { Test, TestingModule } from '@nestjs/testing';
import { MonthlyOpeningService } from './monthlyopening.service';

describe('MonthlyOpeningService', () => {
  let service: MonthlyOpeningService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonthlyOpeningService],
    }).compile();

    service = module.get<MonthlyOpeningService>(MonthlyOpeningService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
