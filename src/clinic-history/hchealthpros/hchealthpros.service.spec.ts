import { Test, TestingModule } from '@nestjs/testing'; 
import { HchealthprosService } from './hchealthpros.service'; 

describe('HchealthprosService', () => { 
	let service: HchealthprosService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [HchealthprosService], 
		}).compile(); 

		service = module.get<HchealthprosService>(HchealthprosService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});