import { Test, TestingModule } from '@nestjs/testing';
import { AnnualClosingSeatService } from './annualclosingseat.service';

describe('AnnualClosingSeatService', () => {
  let service: AnnualClosingSeatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnnualClosingSeatService],
    }).compile();

    service = module.get<AnnualClosingSeatService>(AnnualClosingSeatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
