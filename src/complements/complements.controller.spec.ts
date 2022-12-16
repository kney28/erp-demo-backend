import { Test, TestingModule } from '@nestjs/testing';
import { ComplementsController } from './complements.controller';
import { ComplementsService } from './complements.service';

describe('ComplementsController', () => {
  let controller: ComplementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComplementsController],
      providers: [ComplementsService],
    }).compile();

    controller = module.get<ComplementsController>(ComplementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
