import { Test, TestingModule } from '@nestjs/testing'; 
import { TsconpaysService } from './tsconpays.service'; 

describe('TsconpaysService', () => { 
	let service: TsconpaysService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [TsconpaysService], 
		}).compile(); 

		service = module.get<TsconpaysService>(TsconpaysService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});