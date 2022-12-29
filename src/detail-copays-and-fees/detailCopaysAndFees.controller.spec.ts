import { Test, TestingModule } from '@nestjs/testing';
import { DetailCopaysAndFeesController } from './detailCopaysAndFees.controller';
import { DetailCopaysAndFeesService } from './detailcopaysAndFees.service';

describe('DetailCopaysAndFeesController', () => {
  let controller: DetailCopaysAndFeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailCopaysAndFeesController],
      providers: [DetailCopaysAndFeesService],
    }).compile();

    controller = module.get<DetailCopaysAndFeesController>(DetailCopaysAndFeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
