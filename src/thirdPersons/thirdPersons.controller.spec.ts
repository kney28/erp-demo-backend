import { Test, TestingModule } from '@nestjs/testing';
import { ThirdPersonsController } from './thirdPersons.controller';
import { ThirdPersonsService } from './thirdPersons.service';

describe('ThirdPersonsController', () => {
  let controller: ThirdPersonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThirdPersonsController],
      providers: [ThirdPersonsService],
    }).compile();

    controller = module.get<ThirdPersonsController>(ThirdPersonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
