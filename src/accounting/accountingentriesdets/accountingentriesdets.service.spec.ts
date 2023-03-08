import { Test, TestingModule } from '@nestjs/testing'; 
import { AccountingentriesdetsService } from './accountingentriesdets.service'; 

describe('AccountingentriesdetsService', () => { 
	let service: AccountingentriesdetsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [AccountingentriesdetsService], 
		}).compile(); 

		service = module.get<AccountingentriesdetsService>(AccountingentriesdetsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});