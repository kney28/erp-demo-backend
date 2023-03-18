import { Test, TestingModule } from '@nestjs/testing';
import { CxccouconsController } from './cxccoucons.controller';
import { CxccouconsService } from './cxccoucons.service';
describe('CxccouconsController', () => {
  let controller: CxccouconsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CxccouconsController],
      providers: [CxccouconsService],
    }).compile();

    controller = module.get<CxccouconsController>(CxccouconsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
