import { Test, TestingModule } from '@nestjs/testing'; 
import { HccauseremisrefersController } from './hccauseremisrefers.controller'; 
import { HccauseremisrefersService } from './hccauseremisrefers.service'; 
describe('HccauseremisrefersController', () => { 
	let controller: HccauseremisrefersController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [HccauseremisrefersController], 
			providers: [HccauseremisrefersService], 
		}).compile(); 

		controller = module.get<HccauseremisrefersController>(HccauseremisrefersController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});