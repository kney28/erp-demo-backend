import { Test, TestingModule } from '@nestjs/testing'; 
import { Erp_modulessController } from './erp_moduless.controller'; 
import { Erp_modulessService } from './erp_moduless.service'; 
describe('Erp_modulessController', () => { 
	let controller: Erp_modulessController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [Erp_modulessController], 
			providers: [Erp_modulessService], 
		}).compile(); 

		controller = module.get<Erp_modulessController>(Erp_modulessController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});