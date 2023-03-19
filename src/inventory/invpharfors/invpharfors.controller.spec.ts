import { Test, TestingModule } from '@nestjs/testing'; 
import { InvpharforsController } from './invpharfors.controller'; 
import { InvpharforsService } from './invpharfors.service'; 
describe('InvpharforsController', () => { 
	let controller: InvpharforsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [InvpharforsController], 
			providers: [InvpharforsService], 
		}).compile(); 

		controller = module.get<InvpharforsController>(InvpharforsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});