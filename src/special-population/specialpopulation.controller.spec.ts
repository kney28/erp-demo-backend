import { Test, TestingModule } from '@nestjs/testing';
import { SpecialPopulationController } from './specialpopulation.controller';
import { SpecialPopulationService } from './specialpopulation.service';

describe('SpecialPopulationController', () => {
  let controller: SpecialPopulationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecialPopulationController],
      providers: [SpecialPopulationService],
    }).compile();

    controller = module.get<SpecialPopulationController>(
      SpecialPopulationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
