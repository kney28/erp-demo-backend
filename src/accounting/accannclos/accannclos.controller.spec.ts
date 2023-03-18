import { Test, TestingModule } from '@nestjs/testing'; 
import { AccannclosController } from './accannclos.controller'; 
import { AccannclosService } from './accannclos.service'; 
describe('AccannclosController', () => { 
	let controller: AccannclosController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [AccannclosController], 
			providers: [AccannclosService], 
		}).compile(); 

		controller = module.get<AccannclosController>(AccannclosController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});