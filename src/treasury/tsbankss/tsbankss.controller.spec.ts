import { Test, TestingModule } from '@nestjs/testing'; 
import { TsbankssController } from './tsbankss.controller'; 
import { TsbankssService } from './tsbankss.service'; 
describe('TsbankssController', () => { 
	let controller: TsbankssController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [TsbankssController], 
			providers: [TsbankssService], 
		}).compile(); 

		controller = module.get<TsbankssController>(TsbankssController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});