import { Test, TestingModule } from '@nestjs/testing'; 
import { HccauserefusrefersController } from './hccauserefusrefers.controller'; 
import { HccauserefusrefersService } from './hccauserefusrefers.service'; 
describe('HccauserefusrefersController', () => { 
	let controller: HccauserefusrefersController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [HccauserefusrefersController], 
			providers: [HccauserefusrefersService], 
		}).compile(); 

		controller = module.get<HccauserefusrefersController>(HccauserefusrefersController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});