import { Test, TestingModule } from '@nestjs/testing';
import { PercentagesQxSoatController } from './percentages-qx-soat.controller';
import { PercentagesQxSoatService } from './percentages-qx-soat.service';

describe('PercentagesQxSoatController', () => {
  let controller: PercentagesQxSoatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PercentagesQxSoatController],
      providers: [PercentagesQxSoatService],
    }).compile();

    controller = module.get<PercentagesQxSoatController>(PercentagesQxSoatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
