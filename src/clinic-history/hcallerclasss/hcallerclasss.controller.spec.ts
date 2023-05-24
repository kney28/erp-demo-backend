import { Test, TestingModule } from '@nestjs/testing'; 
import { HcallerclasssController } from './hcallerclasss.controller'; 
import { HcallerclasssService } from './hcallerclasss.service'; 
describe('HcallerclasssController', () => { 
	let controller: HcallerclasssController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [HcallerclasssController], 
			providers: [HcallerclasssService], 
		}).compile(); 

		controller = module.get<HcallerclasssController>(HcallerclasssController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});