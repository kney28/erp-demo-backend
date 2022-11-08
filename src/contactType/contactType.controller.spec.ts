import { Test, TestingModule } from '@nestjs/testing';
import { ContactTypeController } from './contactType.controller';
import { ContactTypeService } from './contactType.service';

describe('ContactTypeController', () => {
  let controller: ContactTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactTypeController],
      providers: [ContactTypeService],
    }).compile();

    controller = module.get<ContactTypeController>(ContactTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
