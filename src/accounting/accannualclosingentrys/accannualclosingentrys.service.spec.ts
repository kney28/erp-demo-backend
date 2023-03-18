import { Test, TestingModule } from '@nestjs/testing'; 
import { AccannualclosingentrysService } from './accannualclosingentrys.service'; 

describe('AccannualclosingentrysService', () => { 
	let service: AccannualclosingentrysService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [AccannualclosingentrysService], 
		}).compile(); 

		service = module.get<AccannualclosingentrysService>(AccannualclosingentrysService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});