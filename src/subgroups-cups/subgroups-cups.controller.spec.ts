import { Test, TestingModule } from '@nestjs/testing';
import { SubgroupsCupsController } from './subgroups-cups.controller';
import { SubgroupsCupsService } from './subgroups-cups.service';

describe('SubgroupsCupsController', () => {
  let controller: SubgroupsCupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubgroupsCupsController],
      providers: [SubgroupsCupsService],
    }).compile();

    controller = module.get<SubgroupsCupsController>(SubgroupsCupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
