import { Test, TestingModule } from '@nestjs/testing'; 
import { ModeratingcopaysController } from './moderatingcopays.controller'; 
import { ModeratingcopaysService } from './moderatingcopays.service'; 
describe('ModeratingcopaysController', () => { 
	let controller: ModeratingcopaysController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [ModeratingcopaysController], 
			providers: [ModeratingcopaysService], 
		}).compile(); 

		controller = module.get<ModeratingcopaysController>(ModeratingcopaysController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});