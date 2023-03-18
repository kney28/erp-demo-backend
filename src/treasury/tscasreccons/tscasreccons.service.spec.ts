import { Test, TestingModule } from '@nestjs/testing'; 
import { TscasrecconsService } from './tscasreccons.service'; 

describe('TscasrecconsService', () => { 
	let service: TscasrecconsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [TscasrecconsService], 
		}).compile(); 

		service = module.get<TscasrecconsService>(TscasrecconsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});