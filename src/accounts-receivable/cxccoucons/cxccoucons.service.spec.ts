import { Test, TestingModule } from '@nestjs/testing';
import { CxccouconsService } from './cxccoucons.service';

describe('CxccouconsService', () => {
  let service: CxccouconsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CxccouconsService],
    }).compile();

    service = module.get<CxccouconsService>(CxccouconsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
