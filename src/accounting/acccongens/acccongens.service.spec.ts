import { Test, TestingModule } from '@nestjs/testing'; 
import { AcccongensService } from './acccongens.service'; 

describe('AcccongensService', () => { 
	let service: AcccongensService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [AcccongensService], 
		}).compile(); 

		service = module.get<AcccongensService>(AcccongensService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});