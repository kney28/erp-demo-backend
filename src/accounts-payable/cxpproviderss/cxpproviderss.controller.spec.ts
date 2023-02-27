import { Test, TestingModule } from '@nestjs/testing';
import { CxpproviderssController } from './cxpproviderss.controller';
import { CxpproviderssService } from './cxpproviderss.service';
describe('CxpproviderssController', () => {
  let controller: CxpproviderssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CxpproviderssController],
      providers: [CxpproviderssService],
    }).compile();

    controller = module.get<CxpproviderssController>(CxpproviderssController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
