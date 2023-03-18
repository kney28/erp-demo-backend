import { Test, TestingModule } from '@nestjs/testing'; 
import { ModeratingcopaysdetsService } from './moderatingcopaysdets.service'; 

describe('ModeratingcopaysdetsService', () => { 
	let service: ModeratingcopaysdetsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [ModeratingcopaysdetsService], 
		}).compile(); 

		service = module.get<ModeratingcopaysdetsService>(ModeratingcopaysdetsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});