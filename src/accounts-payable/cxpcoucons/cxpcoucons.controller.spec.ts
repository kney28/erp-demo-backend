import { Test, TestingModule } from '@nestjs/testing';
import { CxpcouconsController } from './cxpcoucons.controller';
import { CxpcouconsService } from './cxpcoucons.service';
describe('CxpcouconsController', () => {
  let controller: CxpcouconsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CxpcouconsController],
      providers: [CxpcouconsService],
    }).compile();

    controller = module.get<CxpcouconsController>(CxpcouconsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
