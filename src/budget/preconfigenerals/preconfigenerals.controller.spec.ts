import { Test, TestingModule } from '@nestjs/testing'; 
import { PreconfigeneralsController } from './preconfigenerals.controller'; 
import { PreconfigeneralsService } from './preconfigenerals.service'; 
describe('PreconfigeneralsController', () => { 
	let controller: PreconfigeneralsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [PreconfigeneralsController], 
			providers: [PreconfigeneralsService], 
		}).compile(); 

		controller = module.get<PreconfigeneralsController>(PreconfigeneralsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});