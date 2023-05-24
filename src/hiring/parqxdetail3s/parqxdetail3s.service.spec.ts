import { Test, TestingModule } from '@nestjs/testing'; 
import { Parqxdetail3sService } from './parqxdetail3s.service'; 

describe('Parqxdetail3sService', () => { 
	let service: Parqxdetail3sService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [Parqxdetail3sService], 
		}).compile(); 

		service = module.get<Parqxdetail3sService>(Parqxdetail3sService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});