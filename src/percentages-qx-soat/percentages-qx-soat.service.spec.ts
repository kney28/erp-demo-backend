import { Test, TestingModule } from '@nestjs/testing';
import { PercentagesQxSoatService } from './percentages-qx-soat.service';

describe('PercentagesQxSoatService', () => {
  let service: PercentagesQxSoatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PercentagesQxSoatService],
    }).compile();

    service = module.get<PercentagesQxSoatService>(PercentagesQxSoatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
