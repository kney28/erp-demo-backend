import { Test, TestingModule } from '@nestjs/testing';
import { ValidityService } from './validity.service';

describe('ValidityService', () => {
  let service: ValidityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValidityService],
    }).compile();

    service = module.get<ValidityService>(ValidityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
