import { Test, TestingModule } from '@nestjs/testing'; 
import { TscasrecconsController } from './tscasreccons.controller'; 
import { TscasrecconsService } from './tscasreccons.service'; 
describe('TscasrecconsController', () => { 
	let controller: TscasrecconsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [TscasrecconsController], 
			providers: [TscasrecconsService], 
		}).compile(); 

		controller = module.get<TscasrecconsController>(TscasrecconsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});