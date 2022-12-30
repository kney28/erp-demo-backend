import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesCupsController } from './categories-cups.controller';
import { CategoriesCupsService } from './categories-cups.service';

describe('CategoriesCupsController', () => {
  let controller: CategoriesCupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesCupsController],
      providers: [CategoriesCupsService],
    }).compile();

    controller = module.get<CategoriesCupsController>(CategoriesCupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
