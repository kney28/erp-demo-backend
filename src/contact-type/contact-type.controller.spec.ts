import { Test, TestingModule } from '@nestjs/testing';
import { ContactTypeController } from './contact-type.controller';
import { ContactTypeService } from './contact-type.service';

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
