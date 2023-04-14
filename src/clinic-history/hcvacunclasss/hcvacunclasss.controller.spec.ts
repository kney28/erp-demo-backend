import { Test, TestingModule } from '@nestjs/testing'; 
import { HcvacunclasssController } from './hcvacunclasss.controller'; 
import { HcvacunclasssService } from './hcvacunclasss.service'; 
describe('HcvacunclasssController', () => { 
	let controller: HcvacunclasssController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [HcvacunclasssController], 
			providers: [HcvacunclasssService], 
		}).compile(); 

		controller = module.get<HcvacunclasssController>(HcvacunclasssController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});