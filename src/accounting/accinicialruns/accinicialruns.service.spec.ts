import { Test, TestingModule } from '@nestjs/testing'; 
import { AccinicialrunsService } from './accinicialruns.service'; 

describe('AccinicialrunsService', () => { 
	let service: AccinicialrunsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [AccinicialrunsService], 
		}).compile(); 

		service = module.get<AccinicialrunsService>(AccinicialrunsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});