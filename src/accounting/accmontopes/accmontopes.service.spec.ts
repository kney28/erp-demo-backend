import { Test, TestingModule } from '@nestjs/testing'; 
import { AccmontopesService } from './accmontopes.service'; 

describe('AccmontopesService', () => { 
	let service: AccmontopesService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [AccmontopesService], 
		}).compile(); 

		service = module.get<AccmontopesService>(AccmontopesService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});