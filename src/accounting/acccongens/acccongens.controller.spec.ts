import { Test, TestingModule } from '@nestjs/testing'; 
import { AcccongensController } from './acccongens.controller'; 
import { AcccongensService } from './acccongens.service'; 
describe('AcccongensController', () => { 
	let controller: AcccongensController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [AcccongensController], 
			providers: [AcccongensService], 
		}).compile(); 

		controller = module.get<AcccongensController>(AcccongensController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});