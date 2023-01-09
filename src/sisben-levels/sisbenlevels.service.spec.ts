import { Test, TestingModule } from '@nestjs/testing';
import { SisbenLevelsService } from './sisbenlevels.service';

describe('SisbenLevelsService', () => {
  let service: SisbenLevelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SisbenLevelsService],
    }).compile();

    service = module.get<SisbenLevelsService>(SisbenLevelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
