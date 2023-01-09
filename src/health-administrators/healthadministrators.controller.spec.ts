import { Test, TestingModule } from '@nestjs/testing';
import { HealthAdministratorsController } from './healthadministrators.controller';
import { HealthAdministratorsService } from './healthadministrators.service';

describe('HealthAdministratorsController', () => {
  let controller: HealthAdministratorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthAdministratorsController],
      providers: [HealthAdministratorsService],
    }).compile();

    controller = module.get<HealthAdministratorsController>(
      HealthAdministratorsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
