import { Test, TestingModule } from '@nestjs/testing'; 
import { HealthadministratorsService } from './healthadministrators.service'; 

describe('HealthadministratorsService', () => { 
	let service: HealthadministratorsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [HealthadministratorsService], 
		}).compile(); 

		service = module.get<HealthadministratorsService>(HealthadministratorsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});