import { Test, TestingModule } from '@nestjs/testing'; 
import { PreconfigeneralsService } from './preconfigenerals.service'; 

describe('PreconfigeneralsService', () => { 
	let service: PreconfigeneralsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [PreconfigeneralsService], 
		}).compile(); 

		service = module.get<PreconfigeneralsService>(PreconfigeneralsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});