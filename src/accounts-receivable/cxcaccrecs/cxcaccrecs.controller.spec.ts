import { Test, TestingModule } from '@nestjs/testing';
import { CxcaccrecsController } from './cxcaccrecs.controller';
import { CxcaccrecsService } from './cxcaccrecs.service';
describe('CxcaccrecsController', () => {
  let controller: CxcaccrecsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CxcaccrecsController],
      providers: [CxcaccrecsService],
    }).compile();

    controller = module.get<CxcaccrecsController>(CxcaccrecsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
