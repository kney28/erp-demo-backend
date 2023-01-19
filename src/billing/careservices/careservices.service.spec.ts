import { Test, TestingModule } from '@nestjs/testing'; 
import { CareservicesService } from './careservices.service'; 

describe('CareservicesService', () => { 
	let service: CareservicesService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [CareservicesService], 
		}).compile(); 

		service = module.get<CareservicesService>(CareservicesService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});