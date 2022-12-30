import { Test, TestingModule } from '@nestjs/testing';
import { GroundsDenialController } from './grounds-denial.controller';
import { GroundsDenialService } from './grounds-denial.service';

describe('GroundsDenialController', () => {
  let controller: GroundsDenialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroundsDenialController],
      providers: [GroundsDenialService],
    }).compile();

    controller = module.get<GroundsDenialController>(GroundsDenialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
