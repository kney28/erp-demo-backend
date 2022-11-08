import { Test, TestingModule } from '@nestjs/testing';
import { RegisterStatusService } from './register-status.service';

describe('RegisterStatusService', () => {
  let service: RegisterStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterStatusService],
    }).compile();

    service = module.get<RegisterStatusService>(RegisterStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
