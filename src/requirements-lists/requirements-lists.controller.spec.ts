import { Test, TestingModule } from '@nestjs/testing';
import { RequirementsListsController } from './requirements-lists.controller';
import { RequirementsListsService } from './requirements-lists.service';

describe('RequirementsListsController', () => {
  let controller: RequirementsListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequirementsListsController],
      providers: [RequirementsListsService],
    }).compile();

    controller = module.get<RequirementsListsController>(RequirementsListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
