import { Test, TestingModule } from '@nestjs/testing'; 
import { HcdignosessService } from './hcdignosess.service'; 

describe('HcdignosessService', () => { 
	let service: HcdignosessService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [HcdignosessService], 
		}).compile(); 

		service = module.get<HcdignosessService>(HcdignosessService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});