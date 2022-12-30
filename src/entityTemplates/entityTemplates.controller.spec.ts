import { Test, TestingModule } from '@nestjs/testing';
import { EntityTemplatesController } from './entitytemplates.controller';
import { EntityTemplatesService } from './entitytemplates.service';

describe('EntityTemplatesController', () => {
  let controller: EntityTemplatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntityTemplatesController],
      providers: [EntityTemplatesService],
    }).compile();

    controller = module.get<EntityTemplatesController>(EntityTemplatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
