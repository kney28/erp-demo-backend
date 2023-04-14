import { Test, TestingModule } from '@nestjs/testing'; 
import { PercentajeqxdetsService } from './percentajeqxdets.service'; 

describe('PercentajeqxdetsService', () => { 
	let service: PercentajeqxdetsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [PercentajeqxdetsService], 
		}).compile(); 

		service = module.get<PercentajeqxdetsService>(PercentajeqxdetsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});