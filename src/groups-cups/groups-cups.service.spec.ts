import { Test, TestingModule } from '@nestjs/testing';
import { GroupsCupsService } from './groups-cups.service';

describe('GroupsCupsService', () => {
  let service: GroupsCupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupsCupsService],
    }).compile();

    service = module.get<GroupsCupsService>(GroupsCupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
