import { Test, TestingModule } from '@nestjs/testing'; 
import { HcclassanestrecordsService } from './hcclassanestrecords.service'; 

describe('HcclassanestrecordsService', () => { 
	let service: HcclassanestrecordsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [HcclassanestrecordsService], 
		}).compile(); 

		service = module.get<HcclassanestrecordsService>(HcclassanestrecordsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});