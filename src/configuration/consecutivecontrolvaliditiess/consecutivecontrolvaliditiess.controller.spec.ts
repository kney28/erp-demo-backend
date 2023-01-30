import { Test, TestingModule } from '@nestjs/testing'; 
import { ConsecutivecontrolvaliditiessController } from './consecutivecontrolvaliditiess.controller'; 
import { ConsecutivecontrolvaliditiessService } from './consecutivecontrolvaliditiess.service'; 
describe('ConsecutivecontrolvaliditiessController', () => { 
	let controller: ConsecutivecontrolvaliditiessController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [ConsecutivecontrolvaliditiessController], 
			providers: [ConsecutivecontrolvaliditiessService], 
		}).compile(); 

		controller = module.get<ConsecutivecontrolvaliditiessController>(ConsecutivecontrolvaliditiessController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});