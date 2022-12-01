import { Test, TestingModule } from '@nestjs/testing';
import { AccountCatalogController } from './account-catalog.controller';
import { AccountCatalogService } from './account-catalog.service';

describe('AccountCatalogController', () => {
  let controller: AccountCatalogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountCatalogController],
      providers: [AccountCatalogService],
    }).compile();

    controller = module.get<AccountCatalogController>(AccountCatalogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
