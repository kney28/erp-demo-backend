import { Test, TestingModule } from '@nestjs/testing'; 
import { AppreacansController } from './appreacans.controller'; 
import { AppreacansService } from './appreacans.service'; 
describe('AppreacansController', () => { 
	let controller: AppreacansController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [AppreacansController], 
			providers: [AppreacansService], 
		}).compile(); 

		controller = module.get<AppreacansController>(AppreacansController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});