import { Test, TestingModule } from '@nestjs/testing';
import { HcvadsispromipressController } from './hcvadsispromipress.controller';
import { HcvadsispromipressService } from './hcvadsispromipress.service';
describe('HcvadsispromipressController', () => {
  let controller: HcvadsispromipressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HcvadsispromipressController],
      providers: [HcvadsispromipressService],
    }).compile();

    controller = module.get<HcvadsispromipressController>(
      HcvadsispromipressController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
