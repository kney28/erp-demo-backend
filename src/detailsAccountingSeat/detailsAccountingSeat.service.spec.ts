import { Test, TestingModule } from '@nestjs/testing';
import { DetailsAccountingSeatService } from './detailsAccountingSeat.service';

describe('DetailsAccountingSeatService', () => {
  let service: DetailsAccountingSeatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailsAccountingSeatService],
    }).compile();

    service = module.get<DetailsAccountingSeatService>(DetailsAccountingSeatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
