import { Test, TestingModule } from '@nestjs/testing';
import { PercentagesQxSoatDetailService } from './percentages-qx-soat-detail.service';

describe('PercentagesQxSoatDetailService', () => {
  let service: PercentagesQxSoatDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PercentagesQxSoatDetailService],
    }).compile();

    service = module.get<PercentagesQxSoatDetailService>(PercentagesQxSoatDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
