import { Test, TestingModule } from '@nestjs/testing'; 
import { InvunitsmeasController } from './invunitsmeas.controller'; 
import { InvunitsmeasService } from './invunitsmeas.service'; 
describe('InvunitsmeasController', () => { 
	let controller: InvunitsmeasController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [InvunitsmeasController], 
			providers: [InvunitsmeasService], 
		}).compile(); 

		controller = module.get<InvunitsmeasController>(InvunitsmeasController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});