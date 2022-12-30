import { Test, TestingModule } from '@nestjs/testing';
import { DetailCopaysAndFeesService } from './detailcopaysAndFees.service';

describe('DetailCopaysAndFeesService', () => {
  let service: DetailCopaysAndFeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailCopaysAndFeesService],
    }).compile();

    service = module.get<DetailCopaysAndFeesService>(
      DetailCopaysAndFeesService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
