import { Test, TestingModule } from '@nestjs/testing';
import { ThirdPersonsService } from './thirdPersons.service';

describe('ThirdPersonsService', () => {
  let service: ThirdPersonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThirdPersonsService],
    }).compile();

    service = module.get<ThirdPersonsService>(ThirdPersonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
