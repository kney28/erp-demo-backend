import { Test, TestingModule } from '@nestjs/testing';
import { GooparsService } from './goopars.service';

describe('GooparsService', () => {
  let service: GooparsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GooparsService],
    }).compile();

    service = module.get<GooparsService>(GooparsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
