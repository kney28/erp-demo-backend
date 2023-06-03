import { Test, TestingModule } from '@nestjs/testing'; 
import { Parqxdetail2sService } from './parqxdetail2s.service'; 

describe('Parqxdetail2sService', () => { 
	let service: Parqxdetail2sService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [Parqxdetail2sService], 
		}).compile(); 

		service = module.get<Parqxdetail2sService>(Parqxdetail2sService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});