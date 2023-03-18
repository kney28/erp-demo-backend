import { Test, TestingModule } from '@nestjs/testing'; 
import { HealthadministratorsController } from './healthadministrators.controller'; 
import { HealthadministratorsService } from './healthadministrators.service'; 
describe('HealthadministratorsController', () => { 
	let controller: HealthadministratorsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [HealthadministratorsController], 
			providers: [HealthadministratorsService], 
		}).compile(); 

		controller = module.get<HealthadministratorsController>(HealthadministratorsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});