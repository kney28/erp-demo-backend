import { Test, TestingModule } from '@nestjs/testing';


import { CopaysAndFeesController } from './copaysAndFees.controller';
import { CopaysAndFeesService } from './copaysandfees.service';

describe('CopaysAndFeesController', () => {
  let controller: CopaysAndFeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CopaysAndFeesController],
      providers: [CopaysAndFeesService],
    }).compile();

    controller = module.get<CopaysAndFeesController>(CopaysAndFeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
