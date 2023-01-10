import { Test, TestingModule } from '@nestjs/testing';
import { AnnualClosingService } from './annualclosing.service';

describe('AnnualClosingService', () => {
  let service: AnnualClosingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnnualClosingService],
    }).compile();

    service = module.get<AnnualClosingService>(AnnualClosingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
