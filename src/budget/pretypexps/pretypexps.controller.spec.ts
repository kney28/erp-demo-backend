import { Test, TestingModule } from '@nestjs/testing'; 
import { PretypexpsController } from './pretypexps.controller'; 
import { PretypexpsService } from './pretypexps.service'; 
describe('PretypexpsController', () => { 
	let controller: PretypexpsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [PretypexpsController], 
			providers: [PretypexpsService], 
		}).compile(); 

		controller = module.get<PretypexpsController>(PretypexpsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});