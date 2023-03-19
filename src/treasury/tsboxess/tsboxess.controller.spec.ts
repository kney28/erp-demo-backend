import { Test, TestingModule } from '@nestjs/testing'; 
import { TsboxessController } from './tsboxess.controller'; 
import { TsboxessService } from './tsboxess.service'; 
describe('TsboxessController', () => { 
	let controller: TsboxessController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [TsboxessController], 
			providers: [TsboxessService], 
		}).compile(); 

		controller = module.get<TsboxessController>(TsboxessController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});