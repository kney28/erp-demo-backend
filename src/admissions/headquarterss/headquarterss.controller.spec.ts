import { Test, TestingModule } from '@nestjs/testing'; 
import { HeadquarterssController } from './headquarterss.controller'; 
import { HeadquarterssService } from './headquarterss.service'; 
describe('HeadquarterssController', () => { 
	let controller: HeadquarterssController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [HeadquarterssController], 
			providers: [HeadquarterssService], 
		}).compile(); 

		controller = module.get<HeadquarterssController>(HeadquarterssController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});