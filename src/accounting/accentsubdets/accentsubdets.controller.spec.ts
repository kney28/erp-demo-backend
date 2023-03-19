import { Test, TestingModule } from '@nestjs/testing'; 
import { AccentsubdetsController } from './accentsubdets.controller'; 
import { AccentsubdetsService } from './accentsubdets.service'; 
describe('AccentsubdetsController', () => { 
	let controller: AccentsubdetsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [AccentsubdetsController], 
			providers: [AccentsubdetsService], 
		}).compile(); 

		controller = module.get<AccentsubdetsController>(AccentsubdetsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});