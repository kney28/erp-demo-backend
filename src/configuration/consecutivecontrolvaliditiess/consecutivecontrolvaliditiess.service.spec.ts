import { Test, TestingModule } from '@nestjs/testing'; 
import { ConsecutivecontrolvaliditiessService } from './consecutivecontrolvaliditiess.service'; 

describe('ConsecutivecontrolvaliditiessService', () => { 
	let service: ConsecutivecontrolvaliditiessService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [ConsecutivecontrolvaliditiessService], 
		}).compile(); 

		service = module.get<ConsecutivecontrolvaliditiessService>(ConsecutivecontrolvaliditiessService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});