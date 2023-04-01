import { Test, TestingModule } from '@nestjs/testing'; 
import { HealthservicesController } from './healthservices.controller'; 
import { HealthservicesService } from './healthservices.service'; 
describe('HealthservicesController', () => { 
	let controller: HealthservicesController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [HealthservicesController], 
			providers: [HealthservicesService], 
		}).compile(); 

		controller = module.get<HealthservicesController>(HealthservicesController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});