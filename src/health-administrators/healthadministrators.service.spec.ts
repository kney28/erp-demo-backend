import { Test, TestingModule } from '@nestjs/testing';
import { HealthAdministratorsService } from './healthadministrators.service';

describe('HealthAdministratorsService', () => {
  let service: HealthAdministratorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthAdministratorsService],
    }).compile();

    service = module.get<HealthAdministratorsService>(
      HealthAdministratorsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
