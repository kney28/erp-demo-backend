import { Test, TestingModule } from '@nestjs/testing'; 
import { SubcatcupssController } from './subcatcupss.controller'; 
import { SubcatcupssService } from './subcatcupss.service'; 
describe('SubcatcupssController', () => { 
	let controller: SubcatcupssController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [SubcatcupssController], 
			providers: [SubcatcupssService], 
		}).compile(); 

		controller = module.get<SubcatcupssController>(SubcatcupssController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});