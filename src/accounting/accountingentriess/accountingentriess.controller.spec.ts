import { Test, TestingModule } from '@nestjs/testing'; 
import { AccountingentriessController } from './accountingentriess.controller'; 
import { AccountingentriessService } from './accountingentriess.service'; 
describe('AccountingentriessController', () => { 
	let controller: AccountingentriessController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [AccountingentriessController], 
			providers: [AccountingentriessService], 
		}).compile(); 

		controller = module.get<AccountingentriessController>(AccountingentriessController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});