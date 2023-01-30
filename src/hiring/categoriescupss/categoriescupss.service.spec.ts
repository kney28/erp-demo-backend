import { Test, TestingModule } from '@nestjs/testing'; 
import { CategoriescupssService } from './categoriescupss.service'; 

describe('CategoriescupssService', () => { 
	let service: CategoriescupssService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [CategoriescupssService], 
		}).compile(); 

		service = module.get<CategoriescupssService>(CategoriescupssService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});