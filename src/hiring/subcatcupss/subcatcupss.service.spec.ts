import { Test, TestingModule } from '@nestjs/testing'; 
import { SubcatcupssService } from './subcatcupss.service'; 

describe('SubcatcupssService', () => { 
	let service: SubcatcupssService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [SubcatcupssService], 
		}).compile(); 

		service = module.get<SubcatcupssService>(SubcatcupssService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});