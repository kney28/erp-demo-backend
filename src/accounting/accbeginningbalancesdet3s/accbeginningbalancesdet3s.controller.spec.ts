import { Test, TestingModule } from '@nestjs/testing'; 
import { Accbeginningbalancesdet3sController } from './accbeginningbalancesdet3s.controller'; 
import { Accbeginningbalancesdet3sService } from './accbeginningbalancesdet3s.service'; 
describe('Accbeginningbalancesdet3sController', () => { 
	let controller: Accbeginningbalancesdet3sController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [Accbeginningbalancesdet3sController], 
			providers: [Accbeginningbalancesdet3sService], 
		}).compile(); 

		controller = module.get<Accbeginningbalancesdet3sController>(Accbeginningbalancesdet3sController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});