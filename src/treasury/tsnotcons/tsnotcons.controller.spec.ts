import { Test, TestingModule } from '@nestjs/testing'; 
import { TsnotconsController } from './tsnotcons.controller'; 
import { TsnotconsService } from './tsnotcons.service'; 
describe('TsnotconsController', () => { 
	let controller: TsnotconsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [TsnotconsController], 
			providers: [TsnotconsService], 
		}).compile(); 

		controller = module.get<TsnotconsController>(TsnotconsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});