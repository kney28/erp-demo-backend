import { Test, TestingModule } from '@nestjs/testing'; 
import { InvunitsmeasService } from './invunitsmeas.service'; 

describe('InvunitsmeasService', () => { 
	let service: InvunitsmeasService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [InvunitsmeasService], 
		}).compile(); 

		service = module.get<InvunitsmeasService>(InvunitsmeasService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});