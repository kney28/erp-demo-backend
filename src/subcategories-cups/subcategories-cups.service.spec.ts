import { Test, TestingModule } from '@nestjs/testing';
import { SubcategoriesCupsService } from './subcategories-cups.service';

describe('SubcategoriesCupsService', () => {
  let service: SubcategoriesCupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubcategoriesCupsService],
    }).compile();

    service = module.get<SubcategoriesCupsService>(SubcategoriesCupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
