import { Test, TestingModule } from '@nestjs/testing';
import { CxcaccrecsService } from './cxcaccrecs.service';

describe('CxcaccrecsService', () => {
  let service: CxcaccrecsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CxcaccrecsService],
    }).compile();

    service = module.get<CxcaccrecsService>(CxcaccrecsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
