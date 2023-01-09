import { Test, TestingModule } from '@nestjs/testing';
import { RequirementsListsDetailsService } from './requirements-lists-details.service';

describe('RequirementsListsDetailsService', () => {
  let service: RequirementsListsDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequirementsListsDetailsService],
    }).compile();

    service = module.get<RequirementsListsDetailsService>(
      RequirementsListsDetailsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
