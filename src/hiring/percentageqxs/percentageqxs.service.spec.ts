import { Test, TestingModule } from '@nestjs/testing'; 
import { PercentageqxsService } from './percentageqxs.service'; 

describe('PercentageqxsService', () => { 
	let service: PercentageqxsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [PercentageqxsService], 
		}).compile(); 

		service = module.get<PercentageqxsService>(PercentageqxsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});