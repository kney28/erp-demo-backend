import { Test, TestingModule } from '@nestjs/testing'; 
import { TsdisconsService } from './tsdiscons.service'; 

describe('TsdisconsService', () => { 
	let service: TsdisconsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [TsdisconsService], 
		}).compile(); 

		service = module.get<TsdisconsService>(TsdisconsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});