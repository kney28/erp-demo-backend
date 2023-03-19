import { Test, TestingModule } from '@nestjs/testing'; 
import { AccmontopesController } from './accmontopes.controller'; 
import { AccmontopesService } from './accmontopes.service'; 
describe('AccmontopesController', () => { 
	let controller: AccmontopesController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [AccmontopesController], 
			providers: [AccmontopesService], 
		}).compile(); 

		controller = module.get<AccmontopesController>(AccmontopesController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});