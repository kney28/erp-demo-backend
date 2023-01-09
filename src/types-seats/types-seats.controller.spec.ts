import { Test, TestingModule } from '@nestjs/testing';
import { TypesSeatsController } from './types-seats.controller';
import { TypesSeatsService } from './types-seats.service';

describe('TypesSeatsController', () => {
  let controller: TypesSeatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypesSeatsController],
      providers: [TypesSeatsService],
    }).compile();

    controller = module.get<TypesSeatsController>(TypesSeatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
