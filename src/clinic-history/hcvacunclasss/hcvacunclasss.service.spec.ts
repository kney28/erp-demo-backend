import { Test, TestingModule } from '@nestjs/testing'; 
import { HcvacunclasssService } from './hcvacunclasss.service'; 

describe('HcvacunclasssService', () => { 
	let service: HcvacunclasssService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [HcvacunclasssService], 
		}).compile(); 

		service = module.get<HcvacunclasssService>(HcvacunclasssService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});