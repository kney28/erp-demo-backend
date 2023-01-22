import { Test, TestingModule } from '@nestjs/testing';
import { GroupsCupsController } from './groups-cups.controller';
import { GroupsCupsService } from './groups-cups.service';

describe('GroupsCupsController', () => {
  let controller: GroupsCupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupsCupsController],
      providers: [GroupsCupsService],
    }).compile();

    controller = module.get<GroupsCupsController>(GroupsCupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
