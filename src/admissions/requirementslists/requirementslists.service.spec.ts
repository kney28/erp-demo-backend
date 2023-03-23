import { Test, TestingModule } from '@nestjs/testing'; 
import { RequirementslistsService } from './requirementslists.service'; 

describe('RequirementslistsService', () => { 
	let service: RequirementslistsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [RequirementslistsService], 
		}).compile(); 

		service = module.get<RequirementslistsService>(RequirementslistsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});
