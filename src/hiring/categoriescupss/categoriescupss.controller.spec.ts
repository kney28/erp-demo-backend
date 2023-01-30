import { Test, TestingModule } from '@nestjs/testing'; 
import { CategoriescupssController } from './categoriescupss.controller'; 
import { CategoriescupssService } from './categoriescupss.service'; 
describe('CategoriescupssController', () => { 
	let controller: CategoriescupssController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [CategoriescupssController], 
			providers: [CategoriescupssService], 
		}).compile(); 

		controller = module.get<CategoriescupssController>(CategoriescupssController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});