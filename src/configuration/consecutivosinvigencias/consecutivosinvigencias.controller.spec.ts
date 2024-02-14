import { Test, TestingModule } from '@nestjs/testing'; 
import { ConsecutivosinvigenciasController } from './consecutivosinvigencias.controller'; 
import { ConsecutivosinvigenciasService } from './consecutivosinvigencias.service'; 
describe('ConsecutivosinvigenciasController', () => { 
	let controller: ConsecutivosinvigenciasController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [ConsecutivosinvigenciasController], 
			providers: [ConsecutivosinvigenciasService], 
		}).compile(); 

		controller = module.get<ConsecutivosinvigenciasController>(ConsecutivosinvigenciasController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});