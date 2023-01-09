import { Test, TestingModule } from '@nestjs/testing';
import { SisbenLevelsController } from './sisbenlevels.controller';
import { SisbenLevelsService } from './sisbenlevels.service';

describe('SisbenLevelsController', () => {
  let controller: SisbenLevelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SisbenLevelsController],
      providers: [SisbenLevelsService],
    }).compile();

    controller = module.get<SisbenLevelsController>(SisbenLevelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
