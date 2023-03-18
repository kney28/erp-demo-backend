import { Test, TestingModule } from '@nestjs/testing'; 
import { AccmonclosController } from './accmonclos.controller'; 
import { AccmonclosService } from './accmonclos.service'; 
describe('AccmonclosController', () => { 
	let controller: AccmonclosController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [AccmonclosController], 
			providers: [AccmonclosService], 
		}).compile(); 

		controller = module.get<AccmonclosController>(AccmonclosController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});