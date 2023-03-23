import { Test, TestingModule } from '@nestjs/testing'; 
import { RequirementslistsController } from './requirementslists.controller'; 
import { RequirementslistsService } from './requirementslists.service'; 
describe('RequirementslistsController', () => { 
	let controller: RequirementslistsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [RequirementslistsController], 
			providers: [RequirementslistsService], 
		}).compile(); 

		controller = module.get<RequirementslistsController>(RequirementslistsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});
