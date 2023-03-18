import { Test, TestingModule } from '@nestjs/testing'; 
import { AccbeginningbalancessService } from './accbeginningbalancess.service'; 

describe('AccbeginningbalancessService', () => { 
	let service: AccbeginningbalancessService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [AccbeginningbalancessService], 
		}).compile(); 

		service = module.get<AccbeginningbalancessService>(AccbeginningbalancessService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});