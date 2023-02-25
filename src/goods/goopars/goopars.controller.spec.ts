import { Test, TestingModule } from '@nestjs/testing';
import { GooparsController } from './goopars.controller';
import { GooparsService } from './goopars.service';
describe('GooparsController', () => {
  let controller: GooparsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GooparsController],
      providers: [GooparsService],
    }).compile();

    controller = module.get<GooparsController>(GooparsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
