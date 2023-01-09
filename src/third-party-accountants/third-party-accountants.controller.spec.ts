import { Test, TestingModule } from '@nestjs/testing';
import { ThirdPartyAccountantsController } from './third-party-accountants.controller';
import { ThirdPartyAccountantsService } from './third-party-accountants.service';

describe('ThirdPartyAccountantsController', () => {
  let controller: ThirdPartyAccountantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThirdPartyAccountantsController],
      providers: [ThirdPartyAccountantsService],
    }).compile();

    controller = module.get<ThirdPartyAccountantsController>(
      ThirdPartyAccountantsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
