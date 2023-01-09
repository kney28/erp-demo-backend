import { Test, TestingModule } from '@nestjs/testing';
import { RetentionConceptsController } from './retention-concepts.controller';
import { RetentionConceptsService } from './retention-concepts.service';

describe('RetentionConceptsController', () => {
  let controller: RetentionConceptsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RetentionConceptsController],
      providers: [RetentionConceptsService],
    }).compile();

    controller = module.get<RetentionConceptsController>(RetentionConceptsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
