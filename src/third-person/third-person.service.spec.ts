import { Test, TestingModule } from '@nestjs/testing';
import { ThirdPersonService } from './third-person.service';

describe('ThirdPersonService', () => {
  let service: ThirdPersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThirdPersonService],
    }).compile();

    service = module.get<ThirdPersonService>(ThirdPersonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
