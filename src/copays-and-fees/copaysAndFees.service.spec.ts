import { Test, TestingModule } from '@nestjs/testing';
import { CopaysAndFeesService } from './copaysandfees.service';

describe('CopaysAndFeesService', () => {
  let service: CopaysAndFeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CopaysAndFeesService],
    }).compile();

    service = module.get<CopaysAndFeesService>(CopaysAndFeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
