import { Test, TestingModule } from '@nestjs/testing'; 
import { HealthproviderssService } from './healthproviderss.service'; 

describe('HealthproviderssService', () => { 
	let service: HealthproviderssService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [HealthproviderssService], 
		}).compile(); 

		service = module.get<HealthproviderssService>(HealthproviderssService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});