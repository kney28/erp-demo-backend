import { Test, TestingModule } from '@nestjs/testing';
import { AccountingValidityController } from './accountingvalidity.controller';
import { AccountingValidityService } from './accountingvalidity.service';

describe('AccountingValidityController', () => {
  let controller: AccountingValidityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountingValidityController],
      providers: [AccountingValidityService],
    }).compile();

    controller = module.get<AccountingValidityController>(
      AccountingValidityController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
