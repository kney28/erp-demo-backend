import { Test, TestingModule } from '@nestjs/testing'; 
import { AccbeginningbalancessController } from './accbeginningbalancess.controller'; 
import { AccbeginningbalancessService } from './accbeginningbalancess.service'; 
describe('AccbeginningbalancessController', () => { 
	let controller: AccbeginningbalancessController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [AccbeginningbalancessController], 
			providers: [AccbeginningbalancessService], 
		}).compile(); 

		controller = module.get<AccbeginningbalancessController>(AccbeginningbalancessController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});