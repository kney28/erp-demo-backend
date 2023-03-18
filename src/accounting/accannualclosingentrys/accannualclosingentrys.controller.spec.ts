import { Test, TestingModule } from '@nestjs/testing'; 
import { AccannualclosingentrysController } from './accannualclosingentrys.controller'; 
import { AccannualclosingentrysService } from './accannualclosingentrys.service'; 
describe('AccannualclosingentrysController', () => { 
	let controller: AccannualclosingentrysController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [AccannualclosingentrysController], 
			providers: [AccannualclosingentrysService], 
		}).compile(); 

		controller = module.get<AccannualclosingentrysController>(AccannualclosingentrysController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});