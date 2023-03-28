import { Test, TestingModule } from '@nestjs/testing'; 
import { PretypincsController } from './pretypincs.controller'; 
import { PretypincsService } from './pretypincs.service'; 
describe('PretypincsController', () => { 
	let controller: PretypincsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [PretypincsController], 
			providers: [PretypincsService], 
		}).compile(); 

		controller = module.get<PretypincsController>(PretypincsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});