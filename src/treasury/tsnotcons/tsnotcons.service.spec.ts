import { Test, TestingModule } from '@nestjs/testing'; 
import { TsnotconsService } from './tsnotcons.service'; 

describe('TsnotconsService', () => { 
	let service: TsnotconsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [TsnotconsService], 
		}).compile(); 

		service = module.get<TsnotconsService>(TsnotconsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});