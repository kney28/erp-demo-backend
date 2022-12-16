import { Test, TestingModule } from '@nestjs/testing';
import { ThirdPartyAccountantsService } from './third-party-accountants.service';

describe('ThirdPartyAccountantsService', () => {
  let service: ThirdPartyAccountantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThirdPartyAccountantsService],
    }).compile();

    service = module.get<ThirdPartyAccountantsService>(ThirdPartyAccountantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
