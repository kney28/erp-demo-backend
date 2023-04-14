import { Test, TestingModule } from '@nestjs/testing'; 
import { HealthservicesService } from './healthservices.service'; 

describe('HealthservicesService', () => { 
	let service: HealthservicesService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [HealthservicesService], 
		}).compile(); 

		service = module.get<HealthservicesService>(HealthservicesService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});