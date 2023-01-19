import { Test, TestingModule } from '@nestjs/testing'; 
import { NumerationdiansController } from './numerationdians.controller'; 
import { NumerationdiansService } from './numerationdians.service'; 
describe('NumerationdiansController', () => { 
	let controller: NumerationdiansController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [NumerationdiansController], 
			providers: [NumerationdiansService], 
		}).compile(); 

		controller = module.get<NumerationdiansController>(NumerationdiansController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});