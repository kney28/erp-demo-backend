import { Test, TestingModule } from '@nestjs/testing'; 
import { Accbeginningbalancesdet2sService } from './accbeginningbalancesdet2s.service'; 

describe('Accbeginningbalancesdet2sService', () => { 
	let service: Accbeginningbalancesdet2sService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [Accbeginningbalancesdet2sService], 
		}).compile(); 

		service = module.get<Accbeginningbalancesdet2sService>(Accbeginningbalancesdet2sService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});