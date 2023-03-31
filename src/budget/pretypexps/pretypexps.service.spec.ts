import { Test, TestingModule } from '@nestjs/testing'; 
import { PretypexpsService } from './pretypexps.service'; 

describe('PretypexpsService', () => { 
	let service: PretypexpsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [PretypexpsService], 
		}).compile(); 

		service = module.get<PretypexpsService>(PretypexpsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});