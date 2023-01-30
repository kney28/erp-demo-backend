import { Test, TestingModule } from '@nestjs/testing'; 
import { ParameterizationcupssService } from './parameterizationcupss.service'; 

describe('ParameterizationcupssService', () => { 
	let service: ParameterizationcupssService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [ParameterizationcupssService], 
		}).compile(); 

		service = module.get<ParameterizationcupssService>(ParameterizationcupssService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});