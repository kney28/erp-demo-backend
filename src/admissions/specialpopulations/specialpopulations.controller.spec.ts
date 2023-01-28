import { Test, TestingModule } from '@nestjs/testing'; 
import { SpecialpopulationsController } from './specialpopulations.controller'; 
import { SpecialpopulationsService } from './specialpopulations.service'; 
describe('SpecialpopulationsController', () => { 
	let controller: SpecialpopulationsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [SpecialpopulationsController], 
			providers: [SpecialpopulationsService], 
		}).compile(); 

		controller = module.get<SpecialpopulationsController>(SpecialpopulationsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});