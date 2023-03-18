import { Test, TestingModule } from '@nestjs/testing'; 
import { InvaccparsService } from './invaccpars.service'; 

describe('InvaccparsService', () => { 
	let service: InvaccparsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [InvaccparsService], 
		}).compile(); 

		service = module.get<InvaccparsService>(InvaccparsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});