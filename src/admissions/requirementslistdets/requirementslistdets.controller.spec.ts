import { Test, TestingModule } from '@nestjs/testing'; 
import { RequirementslistdetsController } from './requirementslistdets.controller'; 
import { RequirementslistdetsService } from './requirementslistdets.service'; 
describe('RequirementslistdetsController', () => { 
	let controller: RequirementslistdetsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [RequirementslistdetsController], 
			providers: [RequirementslistdetsService], 
		}).compile(); 

		controller = module.get<RequirementslistdetsController>(RequirementslistdetsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});
