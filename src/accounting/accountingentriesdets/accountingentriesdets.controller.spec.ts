import { Test, TestingModule } from '@nestjs/testing'; 
import { AccountingentriesdetsController } from './accountingentriesdets.controller'; 
import { AccountingentriesdetsService } from './accountingentriesdets.service'; 
describe('AccountingentriesdetsController', () => { 
	let controller: AccountingentriesdetsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [AccountingentriesdetsController], 
			providers: [AccountingentriesdetsService], 
		}).compile(); 

		controller = module.get<AccountingentriesdetsController>(AccountingentriesdetsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});