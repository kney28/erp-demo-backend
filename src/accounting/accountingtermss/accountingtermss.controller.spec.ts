import { Test, TestingModule } from '@nestjs/testing'; 
import { AccountingtermssController } from './accountingtermss.controller'; 
import { AccountingtermssService } from './accountingtermss.service'; 
describe('AccountingtermssController', () => { 
	let controller: AccountingtermssController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [AccountingtermssController], 
			providers: [AccountingtermssService], 
		}).compile(); 

		controller = module.get<AccountingtermssController>(AccountingtermssController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});