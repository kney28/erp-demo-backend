import { Test, TestingModule } from '@nestjs/testing';
import { SpecialPopulationService } from './specialpopulation.service';

describe('SpecialPopulationService', () => {
  let service: SpecialPopulationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpecialPopulationService],
    }).compile();

    service = module.get<SpecialPopulationService>(SpecialPopulationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
