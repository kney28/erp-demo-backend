import { Test, TestingModule } from '@nestjs/testing'; 
import { AccinicialrunsController } from './accinicialruns.controller'; 
import { AccinicialrunsService } from './accinicialruns.service'; 
describe('AccinicialrunsController', () => { 
	let controller: AccinicialrunsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [AccinicialrunsController], 
			providers: [AccinicialrunsService], 
		}).compile(); 

		controller = module.get<AccinicialrunsController>(AccinicialrunsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});