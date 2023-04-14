import { Test, TestingModule } from '@nestjs/testing'; 
import { RequirementslistdetsService } from './requirementslistdets.service'; 

describe('RequirementslistdetsService', () => { 
	let service: RequirementslistdetsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [RequirementslistdetsService], 
		}).compile(); 

		service = module.get<RequirementslistdetsService>(RequirementslistdetsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});
