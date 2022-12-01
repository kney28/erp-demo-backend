import { Test, TestingModule } from '@nestjs/testing';
import { TypesSeatsService } from './types-seats.service';

describe('TypesSeatsService', () => {
  let service: TypesSeatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypesSeatsService],
    }).compile();

    service = module.get<TypesSeatsService>(TypesSeatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
