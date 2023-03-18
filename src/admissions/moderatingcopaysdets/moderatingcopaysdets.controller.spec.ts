import { Test, TestingModule } from '@nestjs/testing'; 
import { ModeratingcopaysdetsController } from './moderatingcopaysdets.controller'; 
import { ModeratingcopaysdetsService } from './moderatingcopaysdets.service'; 
describe('ModeratingcopaysdetsController', () => { 
	let controller: ModeratingcopaysdetsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [ModeratingcopaysdetsController], 
			providers: [ModeratingcopaysdetsService], 
		}).compile(); 

		controller = module.get<ModeratingcopaysdetsController>(ModeratingcopaysdetsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});