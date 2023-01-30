import { Test, TestingModule } from '@nestjs/testing';
import { ValidityController } from './validity.controller';
import { ValidityService } from './validity.service';

describe('ValidityController', () => {
  let controller: ValidityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValidityController],
      providers: [ValidityService],
    }).compile();

    controller = module.get<ValidityController>(ValidityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
