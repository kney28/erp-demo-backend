import { Test, TestingModule } from '@nestjs/testing';
import { RetentionConceptsService } from './retention-concepts.service';

describe('RetentionConceptsService', () => {
  let service: RetentionConceptsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RetentionConceptsService],
    }).compile();

    service = module.get<RetentionConceptsService>(RetentionConceptsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
