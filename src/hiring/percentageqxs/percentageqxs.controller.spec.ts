import { Test, TestingModule } from '@nestjs/testing'; 
import { PercentageqxsController } from './percentageqxs.controller'; 
import { PercentageqxsService } from './percentageqxs.service'; 
describe('PercentageqxsController', () => { 
	let controller: PercentageqxsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [PercentageqxsController], 
			providers: [PercentageqxsService], 
		}).compile(); 

		controller = module.get<PercentageqxsController>(PercentageqxsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});