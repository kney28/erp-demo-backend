import { Test, TestingModule } from '@nestjs/testing'; 
import { SpecialpopulationsService } from './specialpopulations.service'; 

describe('SpecialpopulationsService', () => { 
	let service: SpecialpopulationsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [SpecialpopulationsService], 
		}).compile(); 

		service = module.get<SpecialpopulationsService>(SpecialpopulationsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});