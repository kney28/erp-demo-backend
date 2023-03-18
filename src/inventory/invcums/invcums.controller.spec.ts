import { Test, TestingModule } from '@nestjs/testing';
import { InvcumsController } from './invcums.controller';
import { InvcumsService } from './invcums.service';
describe('InvcumsController', () => {
  let controller: InvcumsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvcumsController],
      providers: [InvcumsService],
    }).compile();

    controller = module.get<InvcumsController>(InvcumsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
