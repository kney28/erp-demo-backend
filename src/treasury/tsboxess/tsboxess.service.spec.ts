import { Test, TestingModule } from '@nestjs/testing'; 
import { TsboxessService } from './tsboxess.service'; 

describe('TsboxessService', () => { 
	let service: TsboxessService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [TsboxessService], 
		}).compile(); 

		service = module.get<TsboxessService>(TsboxessService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});