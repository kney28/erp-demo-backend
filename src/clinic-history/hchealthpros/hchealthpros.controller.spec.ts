import { Test, TestingModule } from '@nestjs/testing'; 
import { HchealthprosController } from './hchealthpros.controller'; 
import { HchealthprosService } from './hchealthpros.service'; 
describe('HchealthprosController', () => { 
	let controller: HchealthprosController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [HchealthprosController], 
			providers: [HchealthprosService], 
		}).compile(); 

		controller = module.get<HchealthprosController>(HchealthprosController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});