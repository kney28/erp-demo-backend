import { Test, TestingModule } from '@nestjs/testing'; 
import { SubgruposcupssController } from './subgruposcupss.controller'; 
import { SubgruposcupssService } from './subgruposcupss.service'; 
describe('SubgruposcupssController', () => { 
	let controller: SubgruposcupssController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [SubgruposcupssController], 
			providers: [SubgruposcupssService], 
		}).compile(); 

		controller = module.get<SubgruposcupssController>(SubgruposcupssController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});