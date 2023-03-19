import { Test, TestingModule } from '@nestjs/testing'; 
import { HcspecialtiessController } from './hcspecialtiess.controller'; 
import { HcspecialtiessService } from './hcspecialtiess.service'; 
describe('HcspecialtiessController', () => { 
	let controller: HcspecialtiessController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [HcspecialtiessController], 
			providers: [HcspecialtiessService], 
		}).compile(); 

		controller = module.get<HcspecialtiessController>(HcspecialtiessController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});