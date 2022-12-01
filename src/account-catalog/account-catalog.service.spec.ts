import { Test, TestingModule } from '@nestjs/testing';
import { AccountCatalogService } from './account-catalog.service';

describe('AccountCatalogService', () => {
  let service: AccountCatalogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountCatalogService],
    }).compile();

    service = module.get<AccountCatalogService>(AccountCatalogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
