import { Test, TestingModule } from '@nestjs/testing';
import { SubgroupsCupsService } from './subgroups-cups.service';

describe('SubgroupsCupsService', () => {
  let service: SubgroupsCupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubgroupsCupsService],
    }).compile();

    service = module.get<SubgroupsCupsService>(SubgroupsCupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
