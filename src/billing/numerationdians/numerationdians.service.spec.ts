import { Test, TestingModule } from '@nestjs/testing'; 
import { NumerationdiansService } from './numerationdians.service'; 

describe('NumerationdiansService', () => { 
	let service: NumerationdiansService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [NumerationdiansService], 
		}).compile(); 

		service = module.get<NumerationdiansService>(NumerationdiansService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});