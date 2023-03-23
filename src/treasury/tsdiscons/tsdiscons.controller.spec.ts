import { Test, TestingModule } from '@nestjs/testing'; 
import { TsdisconsController } from './tsdiscons.controller'; 
import { TsdisconsService } from './tsdiscons.service'; 
describe('TsdisconsController', () => { 
	let controller: TsdisconsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [TsdisconsController], 
			providers: [TsdisconsService], 
		}).compile(); 

		controller = module.get<TsdisconsController>(TsdisconsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});