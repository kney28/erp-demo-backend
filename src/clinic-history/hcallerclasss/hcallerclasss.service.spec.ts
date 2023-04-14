import { Test, TestingModule } from '@nestjs/testing'; 
import { HcallerclasssService } from './hcallerclasss.service'; 

describe('HcallerclasssService', () => { 
	let service: HcallerclasssService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [HcallerclasssService], 
		}).compile(); 

		service = module.get<HcallerclasssService>(HcallerclasssService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});