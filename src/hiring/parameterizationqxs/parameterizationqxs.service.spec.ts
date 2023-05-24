import { Test, TestingModule } from '@nestjs/testing'; 
import { ParameterizationqxsService } from './parameterizationqxs.service'; 

describe('ParameterizationqxsService', () => { 
	let service: ParameterizationqxsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [ParameterizationqxsService], 
		}).compile(); 

		service = module.get<ParameterizationqxsService>(ParameterizationqxsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});