import { Test, TestingModule } from '@nestjs/testing'; 
import { TsbankssService } from './tsbankss.service'; 

describe('TsbankssService', () => { 
	let service: TsbankssService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [TsbankssService], 
		}).compile(); 

		service = module.get<TsbankssService>(TsbankssService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});