import { Test, TestingModule } from '@nestjs/testing'; 
import { AccentsubdetsService } from './accentsubdets.service'; 

describe('AccentsubdetsService', () => { 
	let service: AccentsubdetsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [AccentsubdetsService], 
		}).compile(); 

		service = module.get<AccentsubdetsService>(AccentsubdetsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});