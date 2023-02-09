import { Test, TestingModule } from '@nestjs/testing'; 
import { AccountingtermssService } from './accountingtermss.service'; 

describe('AccountingtermssService', () => { 
	let service: AccountingtermssService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [AccountingtermssService], 
		}).compile(); 

		service = module.get<AccountingtermssService>(AccountingtermssService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});