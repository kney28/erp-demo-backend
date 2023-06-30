import { Test, TestingModule } from '@nestjs/testing'; 
import { Parqxdetail1sService } from './parqxdetail1s.service'; 

describe('Parqxdetail1sService', () => { 
	let service: Parqxdetail1sService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [Parqxdetail1sService], 
		}).compile(); 

		service = module.get<Parqxdetail1sService>(Parqxdetail1sService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});