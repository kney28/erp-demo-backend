import { Test, TestingModule } from '@nestjs/testing'; 
import { HcclassanestrecordsController } from './hcclassanestrecords.controller'; 
import { HcclassanestrecordsService } from './hcclassanestrecords.service'; 
describe('HcclassanestrecordsController', () => { 
	let controller: HcclassanestrecordsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [HcclassanestrecordsController], 
			providers: [HcclassanestrecordsService], 
		}).compile(); 

		controller = module.get<HcclassanestrecordsController>(HcclassanestrecordsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});