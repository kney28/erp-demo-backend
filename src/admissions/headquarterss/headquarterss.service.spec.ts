import { Test, TestingModule } from '@nestjs/testing'; 
import { HeadquarterssService } from './headquarterss.service'; 

describe('HeadquarterssService', () => { 
	let service: HeadquarterssService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [HeadquarterssService], 
		}).compile(); 

		service = module.get<HeadquarterssService>(HeadquarterssService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});