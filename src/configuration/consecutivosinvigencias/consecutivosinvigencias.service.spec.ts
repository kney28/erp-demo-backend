import { Test, TestingModule } from '@nestjs/testing'; 
import { ConsecutivosinvigenciasService } from './consecutivosinvigencias.service'; 

describe('ConsecutivosinvigenciasService', () => { 
	let service: ConsecutivosinvigenciasService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [ConsecutivosinvigenciasService], 
		}).compile(); 

		service = module.get<ConsecutivosinvigenciasService>(ConsecutivosinvigenciasService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});