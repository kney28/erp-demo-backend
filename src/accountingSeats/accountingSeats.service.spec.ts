import { Test, TestingModule } from '@nestjs/testing';
import { AccountingSeatsService } from './accountingSeats.service';

describe('AccountingSeatsService', () => {
  let service: AccountingSeatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountingSeatsService],
    }).compile();

    service = module.get<AccountingSeatsService>(AccountingSeatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
