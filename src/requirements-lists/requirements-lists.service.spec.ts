import { Test, TestingModule } from '@nestjs/testing';
import { RequirementsListsService } from './requirements-lists.service';

describe('RequirementsListsService', () => {
  let service: RequirementsListsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequirementsListsService],
    }).compile();

    service = module.get<RequirementsListsService>(RequirementsListsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
