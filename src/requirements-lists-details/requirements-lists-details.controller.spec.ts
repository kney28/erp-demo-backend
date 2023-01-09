import { Test, TestingModule } from '@nestjs/testing';
import { RequirementsListsDetailsController } from './requirements-lists-details.controller';
import { RequirementsListsDetailsService } from './requirements-lists-details.service';

describe('RequirementsListsDetailsController', () => {
  let controller: RequirementsListsDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequirementsListsDetailsController],
      providers: [RequirementsListsDetailsService],
    }).compile();

    controller = module.get<RequirementsListsDetailsController>(RequirementsListsDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
