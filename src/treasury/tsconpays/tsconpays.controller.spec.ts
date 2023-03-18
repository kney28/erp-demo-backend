import { Test, TestingModule } from '@nestjs/testing'; 
import { TsconpaysController } from './tsconpays.controller'; 
import { TsconpaysService } from './tsconpays.service'; 
describe('TsconpaysController', () => { 
	let controller: TsconpaysController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [TsconpaysController], 
			providers: [TsconpaysService], 
		}).compile(); 

		controller = module.get<TsconpaysController>(TsconpaysController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});