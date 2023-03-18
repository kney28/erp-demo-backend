import { Test, TestingModule } from '@nestjs/testing'; 
import { GooclasController } from './gooclas.controller'; 
import { GooclasService } from './gooclas.service'; 
describe('GooclasController', () => { 
	let controller: GooclasController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [GooclasController], 
			providers: [GooclasService], 
		}).compile(); 

		controller = module.get<GooclasController>(GooclasController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});