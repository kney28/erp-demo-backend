import { Test, TestingModule } from '@nestjs/testing';
import { PercentagesQxSoatDetailController } from './percentages-qx-soat-detail.controller';
import { PercentagesQxSoatDetailService } from './percentages-qx-soat-detail.service';

describe('PercentagesQxSoatDetailController', () => {
  let controller: PercentagesQxSoatDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PercentagesQxSoatDetailController],
      providers: [PercentagesQxSoatDetailService],
    }).compile();

    controller = module.get<PercentagesQxSoatDetailController>(PercentagesQxSoatDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
