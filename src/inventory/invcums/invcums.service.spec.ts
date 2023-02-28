import { Test, TestingModule } from '@nestjs/testing'; 
import { InvcumsService } from './invcums.service'; 

describe('InvcumsService', () => { 
	let service: InvcumsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [InvcumsService], 
		}).compile(); 

		service = module.get<InvcumsService>(InvcumsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});