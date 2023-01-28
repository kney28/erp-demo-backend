import { Test, TestingModule } from '@nestjs/testing'; 
import { SisbenlevelsService } from './sisbenlevels.service'; 

describe('SisbenlevelsService', () => { 
	let service: SisbenlevelsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [SisbenlevelsService], 
		}).compile(); 

		service = module.get<SisbenlevelsService>(SisbenlevelsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});