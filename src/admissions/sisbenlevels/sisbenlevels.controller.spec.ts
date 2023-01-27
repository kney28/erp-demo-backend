import { Test, TestingModule } from '@nestjs/testing'; 
import { SisbenlevelsController } from './sisbenlevels.controller'; 
import { SisbenlevelsService } from './sisbenlevels.service'; 
describe('SisbenlevelsController', () => { 
	let controller: SisbenlevelsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [SisbenlevelsController], 
			providers: [SisbenlevelsService], 
		}).compile(); 

		controller = module.get<SisbenlevelsController>(SisbenlevelsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});