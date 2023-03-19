import { Test, TestingModule } from '@nestjs/testing';
import { GooclasService } from './gooclas.service';

describe('GooclasService', () => {
  let service: GooclasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GooclasService],
    }).compile();

    service = module.get<GooclasService>(GooclasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
