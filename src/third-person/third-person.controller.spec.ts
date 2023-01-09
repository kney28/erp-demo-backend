import { Test, TestingModule } from '@nestjs/testing';
import { ThirdPersonController } from './third-person.controller';
import { ThirdPersonService } from './third-person.service';

describe('ThirdPersonController', () => {
  let controller: ThirdPersonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThirdPersonController],
      providers: [ThirdPersonService],
    }).compile();

    controller = module.get<ThirdPersonController>(ThirdPersonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
