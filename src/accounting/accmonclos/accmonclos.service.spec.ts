import { Test, TestingModule } from '@nestjs/testing'; 
import { AccmonclosService } from './accmonclos.service'; 

describe('AccmonclosService', () => { 
	let service: AccmonclosService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [AccmonclosService], 
		}).compile(); 

		service = module.get<AccmonclosService>(AccmonclosService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});