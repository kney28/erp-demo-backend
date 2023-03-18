import { Test, TestingModule } from '@nestjs/testing'; 
import { InvaccparsController } from './invaccpars.controller'; 
import { InvaccparsService } from './invaccpars.service'; 
describe('InvaccparsController', () => { 
	let controller: InvaccparsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [InvaccparsController], 
			providers: [InvaccparsService], 
		}).compile(); 

		controller = module.get<InvaccparsController>(InvaccparsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});