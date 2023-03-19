import { Test, TestingModule } from '@nestjs/testing';
import { AppofficessService } from './appofficess.service';

describe('AppofficessService', () => {
  let service: AppofficessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppofficessService],
    }).compile();

    service = module.get<AppofficessService>(AppofficessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
