import { Test, TestingModule } from '@nestjs/testing'; 
import { DetailnumerationdiansService } from './detailnumerationdians.service'; 

describe('DetailnumerationdiansService', () => { 
	let service: DetailnumerationdiansService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [DetailnumerationdiansService], 
		}).compile(); 

		service = module.get<DetailnumerationdiansService>(DetailnumerationdiansService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});