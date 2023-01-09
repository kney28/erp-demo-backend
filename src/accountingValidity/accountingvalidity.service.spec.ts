import { Test, TestingModule } from '@nestjs/testing';
import { AccountingValidityService } from './accountingvalidity.service';

describe('AccountingValidityService', () => {
  let service: AccountingValidityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountingValidityService],
    }).compile();

    service = module.get<AccountingValidityService>(AccountingValidityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
