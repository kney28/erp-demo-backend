import { Test, TestingModule } from '@nestjs/testing';
import { ContactTypeService } from './contact-type.service';

describe('ContactTypeService', () => {
  let service: ContactTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactTypeService],
    }).compile();

    service = module.get<ContactTypeService>(ContactTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
