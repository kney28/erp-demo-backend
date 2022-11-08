import { Test, TestingModule } from '@nestjs/testing';
import { RegisterStatusController } from './registerStatus.controller';
import { RegisterStatusService } from './registerStatus.service';

describe('RegisterStatusController', () => {
  let controller: RegisterStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterStatusController],
      providers: [RegisterStatusService],
    }).compile();

    controller = module.get<RegisterStatusController>(RegisterStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
