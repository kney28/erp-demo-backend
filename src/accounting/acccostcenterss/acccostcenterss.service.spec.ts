import { Test, TestingModule } from '@nestjs/testing'; 
import { AcccostcenterssService } from './acccostcenterss.service'; 

describe('AcccostcenterssService', () => { 
	let service: AcccostcenterssService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [AcccostcenterssService], 
		}).compile(); 

		service = module.get<AcccostcenterssService>(AcccostcenterssService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});