import { Test, TestingModule } from '@nestjs/testing';
import { SubcategoriesCupsController } from './subcategories-cups.controller';
import { SubcategoriesCupsService } from './subcategories-cups.service';

describe('SubcategoriesCupsController', () => {
  let controller: SubcategoriesCupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubcategoriesCupsController],
      providers: [SubcategoriesCupsService],
    }).compile();

    controller = module.get<SubcategoriesCupsController>(SubcategoriesCupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
