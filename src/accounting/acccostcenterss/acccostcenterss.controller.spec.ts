import { Test, TestingModule } from '@nestjs/testing'; 
import { AcccostcenterssController } from './acccostcenterss.controller'; 
import { AcccostcenterssService } from './acccostcenterss.service'; 
describe('AcccostcenterssController', () => { 
	let controller: AcccostcenterssController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [AcccostcenterssController], 
			providers: [AcccostcenterssService], 
		}).compile(); 

		controller = module.get<AcccostcenterssController>(AcccostcenterssController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});