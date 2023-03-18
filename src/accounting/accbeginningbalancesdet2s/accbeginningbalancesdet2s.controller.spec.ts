import { Test, TestingModule } from '@nestjs/testing'; 
import { Accbeginningbalancesdet2sController } from './accbeginningbalancesdet2s.controller'; 
import { Accbeginningbalancesdet2sService } from './accbeginningbalancesdet2s.service'; 
describe('Accbeginningbalancesdet2sController', () => { 
	let controller: Accbeginningbalancesdet2sController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [Accbeginningbalancesdet2sController], 
			providers: [Accbeginningbalancesdet2sService], 
		}).compile(); 

		controller = module.get<Accbeginningbalancesdet2sController>(Accbeginningbalancesdet2sController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});