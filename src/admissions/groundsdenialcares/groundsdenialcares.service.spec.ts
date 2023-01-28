import { Test, TestingModule } from '@nestjs/testing'; 
import { GroundsdenialcaresService } from './groundsdenialcares.service'; 

describe('GroundsdenialcaresService', () => { 
	let service: GroundsdenialcaresService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [GroundsdenialcaresService], 
		}).compile(); 

		service = module.get<GroundsdenialcaresService>(GroundsdenialcaresService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});