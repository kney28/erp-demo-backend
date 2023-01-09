import { Test, TestingModule } from '@nestjs/testing';
import { HealthProvidersController } from './healthproviders.controller';
import { HealthProvidersService } from './healthproviders.service';

describe('HealthProvidersController', () => {
  let controller: HealthProvidersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthProvidersController],
      providers: [HealthProvidersService],
    }).compile();

    controller = module.get<HealthProvidersController>(
      HealthProvidersController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
