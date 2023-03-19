import { Test, TestingModule } from '@nestjs/testing'; 
import { AccbalmovsController } from './accbalmovs.controller'; 
import { AccbalmovsService } from './accbalmovs.service'; 
describe('AccbalmovsController', () => { 
	let controller: AccbalmovsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [AccbalmovsController], 
			providers: [AccbalmovsService], 
		}).compile(); 

		controller = module.get<AccbalmovsController>(AccbalmovsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});