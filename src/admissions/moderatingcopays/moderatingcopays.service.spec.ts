import { Test, TestingModule } from '@nestjs/testing'; 
import { ModeratingcopaysService } from './moderatingcopays.service'; 

describe('ModeratingcopaysService', () => { 
	let service: ModeratingcopaysService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [ModeratingcopaysService], 
		}).compile(); 

		service = module.get<ModeratingcopaysService>(ModeratingcopaysService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});