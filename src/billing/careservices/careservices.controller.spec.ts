import { Test, TestingModule } from '@nestjs/testing'; 
import { CareservicesController } from './careservices.controller'; 
import { CareservicesService } from './careservices.service'; 
describe('CareservicesController', () => { 
	let controller: CareservicesController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [CareservicesController], 
			providers: [CareservicesService], 
		}).compile(); 

		controller = module.get<CareservicesController>(CareservicesController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});