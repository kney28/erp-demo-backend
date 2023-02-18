import { Test, TestingModule } from '@nestjs/testing'; 
import { AccbalmovsService } from './accbalmovs.service'; 

describe('AccbalmovsService', () => { 
	let service: AccbalmovsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [AccbalmovsService], 
		}).compile(); 

		service = module.get<AccbalmovsService>(AccbalmovsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});