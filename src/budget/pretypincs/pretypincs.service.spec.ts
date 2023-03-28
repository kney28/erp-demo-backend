import { Test, TestingModule } from '@nestjs/testing'; 
import { PretypincsService } from './pretypincs.service'; 

describe('PretypincsService', () => { 
	let service: PretypincsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [PretypincsService], 
		}).compile(); 

		service = module.get<PretypincsService>(PretypincsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});