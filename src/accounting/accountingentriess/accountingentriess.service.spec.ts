import { Test, TestingModule } from '@nestjs/testing'; 
import { AccountingentriessService } from './accountingentriess.service'; 

describe('AccountingentriessService', () => { 
	let service: AccountingentriessService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [AccountingentriessService], 
		}).compile(); 

		service = module.get<AccountingentriessService>(AccountingentriessService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});