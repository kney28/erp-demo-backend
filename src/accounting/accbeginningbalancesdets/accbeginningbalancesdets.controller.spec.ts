import { Test, TestingModule } from '@nestjs/testing'; 
import { AccbeginningbalancesdetsController } from './accbeginningbalancesdets.controller'; 
import { AccbeginningbalancesdetsService } from './accbeginningbalancesdets.service'; 
describe('AccbeginningbalancesdetsController', () => { 
	let controller: AccbeginningbalancesdetsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [AccbeginningbalancesdetsController], 
			providers: [AccbeginningbalancesdetsService], 
		}).compile(); 

		controller = module.get<AccbeginningbalancesdetsController>(AccbeginningbalancesdetsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});