import { Test, TestingModule } from '@nestjs/testing';
import { GooconfsController } from './gooconfs.controller';
import { GooconfsService } from './gooconfs.service';
describe('GooconfsController', () => {
  let controller: GooconfsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GooconfsController],
      providers: [GooconfsService],
    }).compile();

    controller = module.get<GooconfsController>(GooconfsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
