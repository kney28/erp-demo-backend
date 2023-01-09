import { Test, TestingModule } from '@nestjs/testing';
import { GroundsDenialService } from './grounds-denial.service';

describe('GroundsDenialService', () => {
  let service: GroundsDenialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroundsDenialService],
    }).compile();

    service = module.get<GroundsDenialService>(GroundsDenialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
