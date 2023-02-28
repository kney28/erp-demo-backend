import { Test, TestingModule } from '@nestjs/testing'; 
import { InvpharforsService } from './invpharfors.service'; 

describe('InvpharforsService', () => { 
	let service: InvpharforsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [InvpharforsService], 
		}).compile(); 

		service = module.get<InvpharforsService>(InvpharforsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});