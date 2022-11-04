import { Test, TestingModule } from '@nestjs/testing';
import { ComplementsService } from './complements.service';

describe('ComplementsService', () => {
  let service: ComplementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComplementsService],
    }).compile();

    service = module.get<ComplementsService>(ComplementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
