import { Test, TestingModule } from '@nestjs/testing';
import { AnnualClosingController } from './annualclosing.controller';
import { AnnualClosingService } from './annualclosing.service';

describe('AnnualClosingController', () => {
  let controller: AnnualClosingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnnualClosingController],
      providers: [AnnualClosingService],
    }).compile();

    controller = module.get<AnnualClosingController>(AnnualClosingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
