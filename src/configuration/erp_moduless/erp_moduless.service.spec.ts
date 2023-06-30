import { Test, TestingModule } from '@nestjs/testing'; 
import { Erp_modulessService } from './erp_moduless.service'; 

describe('Erp_modulessService', () => { 
	let service: Erp_modulessService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [Erp_modulessService], 
		}).compile(); 

		service = module.get<Erp_modulessService>(Erp_modulessService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});