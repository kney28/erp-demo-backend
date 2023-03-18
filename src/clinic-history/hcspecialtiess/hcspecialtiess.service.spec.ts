import { Test, TestingModule } from '@nestjs/testing'; 
import { HcspecialtiessService } from './hcspecialtiess.service'; 

describe('HcspecialtiessService', () => { 
	let service: HcspecialtiessService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [HcspecialtiessService], 
		}).compile(); 

		service = module.get<HcspecialtiessService>(HcspecialtiessService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});