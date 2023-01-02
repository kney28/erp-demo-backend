import { Test, TestingModule } from '@nestjs/testing';
import { HealthProvidersService } from './healthproviders.service';

describe('HealthProvidersService', () => {
  let service: HealthProvidersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthProvidersService],
    }).compile();

    service = module.get<HealthProvidersService>(HealthProvidersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
