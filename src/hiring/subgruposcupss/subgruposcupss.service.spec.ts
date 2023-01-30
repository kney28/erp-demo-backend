import { Test, TestingModule } from '@nestjs/testing'; 
import { SubgruposcupssService } from './subgruposcupss.service'; 

describe('SubgruposcupssService', () => { 
	let service: SubgruposcupssService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [SubgruposcupssService], 
		}).compile(); 

		service = module.get<SubgruposcupssService>(SubgruposcupssService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});