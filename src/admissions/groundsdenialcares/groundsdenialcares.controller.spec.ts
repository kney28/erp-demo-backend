import { Test, TestingModule } from '@nestjs/testing'; 
import { GroundsdenialcaresController } from './groundsdenialcares.controller'; 
import { GroundsdenialcaresService } from './groundsdenialcares.service'; 
describe('GroundsdenialcaresController', () => { 
	let controller: GroundsdenialcaresController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [GroundsdenialcaresController], 
			providers: [GroundsdenialcaresService], 
		}).compile(); 

		controller = module.get<GroundsdenialcaresController>(GroundsdenialcaresController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});