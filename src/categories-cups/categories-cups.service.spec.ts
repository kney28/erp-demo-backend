import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesCupsService } from './categories-cups.service';

describe('CategoriesCupsService', () => {
  let service: CategoriesCupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesCupsService],
    }).compile();

    service = module.get<CategoriesCupsService>(CategoriesCupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
