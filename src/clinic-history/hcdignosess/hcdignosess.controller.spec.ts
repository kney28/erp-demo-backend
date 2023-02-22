import { Test, TestingModule } from '@nestjs/testing'; 
import { HcdignosessController } from './hcdignosess.controller'; 
import { HcdignosessService } from './hcdignosess.service'; 
describe('HcdignosessController', () => { 
	let controller: HcdignosessController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [HcdignosessController], 
			providers: [HcdignosessService], 
		}).compile(); 

		controller = module.get<HcdignosessController>(HcdignosessController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});