import { Test, TestingModule } from '@nestjs/testing';
import { EntityTemplatesService } from './entityTemplates.service';

describe('EntityTemplatesService', () => {
  let service: EntityTemplatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntityTemplatesService],
    }).compile();

    service = module.get<EntityTemplatesService>(EntityTemplatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
