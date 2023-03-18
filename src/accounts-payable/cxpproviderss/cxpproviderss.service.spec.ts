import { Test, TestingModule } from '@nestjs/testing'; 
import { CxpproviderssService } from './cxpproviderss.service'; 

describe('CxpproviderssService', () => { 
	let service: CxpproviderssService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [CxpproviderssService], 
		}).compile(); 

		service = module.get<CxpproviderssService>(CxpproviderssService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});