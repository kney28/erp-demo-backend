import { Test, TestingModule } from '@nestjs/testing';
import { GeneralAccountingService } from './generalaccounting.service';

describe('GeneralAccountingService', () => {
  let service: GeneralAccountingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneralAccountingService],
    }).compile();

    service = module.get<GeneralAccountingService>(GeneralAccountingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
