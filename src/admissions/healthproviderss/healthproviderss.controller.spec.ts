import { Test, TestingModule } from '@nestjs/testing'; 
import { HealthproviderssController } from './healthproviderss.controller'; 
import { HealthproviderssService } from './healthproviderss.service'; 
describe('HealthproviderssController', () => { 
	let controller: HealthproviderssController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [HealthproviderssController], 
			providers: [HealthproviderssService], 
		}).compile(); 

		controller = module.get<HealthproviderssController>(HealthproviderssController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});