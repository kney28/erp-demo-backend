import { Test, TestingModule } from '@nestjs/testing';
import { AccountingSeatsController } from './accountingSeats.controller';
import { AccountingSeatsService } from './accountingSeats.service';

describe('AccountingSeatsController', () => {
  let controller: AccountingSeatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountingSeatsController],
      providers: [AccountingSeatsService],
    }).compile();

    controller = module.get<AccountingSeatsController>(AccountingSeatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
