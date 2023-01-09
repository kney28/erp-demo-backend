import { Test, TestingModule } from '@nestjs/testing';
import { DetailsAccountingSeatController } from './detailsAccountingSeat.controller';
import { DetailsAccountingSeatService } from './detailsAccountingSeat.service';

describe('DetailsAccountingSeatController', () => {
  let controller: DetailsAccountingSeatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailsAccountingSeatController],
      providers: [DetailsAccountingSeatService],
    }).compile();

    controller = module.get<DetailsAccountingSeatController>(DetailsAccountingSeatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
