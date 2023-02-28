import { Test, TestingModule } from '@nestjs/testing'; 
import { AppofficessController } from './appofficess.controller'; 
import { AppofficessService } from './appofficess.service'; 
describe('AppofficessController', () => { 
	let controller: AppofficessController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [AppofficessController], 
			providers: [AppofficessService], 
		}).compile(); 

		controller = module.get<AppofficessController>(AppofficessController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});