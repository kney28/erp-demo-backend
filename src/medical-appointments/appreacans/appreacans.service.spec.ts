import { Test, TestingModule } from '@nestjs/testing'; 
import { AppreacansService } from './appreacans.service'; 

describe('AppreacansService', () => { 
	let service: AppreacansService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [AppreacansService], 
		}).compile(); 

		service = module.get<AppreacansService>(AppreacansService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});