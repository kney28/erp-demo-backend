import { Test, TestingModule } from '@nestjs/testing'; 
import { AccannclosService } from './accannclos.service'; 

describe('AccannclosService', () => { 
	let service: AccannclosService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [AccannclosService], 
		}).compile(); 

		service = module.get<AccannclosService>(AccannclosService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});