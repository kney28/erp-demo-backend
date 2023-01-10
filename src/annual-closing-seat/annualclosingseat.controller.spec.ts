import { Test, TestingModule } from '@nestjs/testing';
import { AnnualClosingSeatController } from './annualclosingseat.controller';
import { AnnualClosingSeatService } from './annualclosingseat.service';

describe('AnnualClosingSeatController', () => {
  let controller: AnnualClosingSeatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnnualClosingSeatController],
      providers: [AnnualClosingSeatService],
    }).compile();

    controller = module.get<AnnualClosingSeatController>(
      AnnualClosingSeatController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
