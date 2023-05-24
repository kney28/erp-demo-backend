import { Test, TestingModule } from '@nestjs/testing'; 
import { Parqxdetail1sController } from './parqxdetail1s.controller'; 
import { Parqxdetail1sService } from './parqxdetail1s.service'; 
describe('Parqxdetail1sController', () => { 
	let controller: Parqxdetail1sController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [Parqxdetail1sController], 
			providers: [Parqxdetail1sService], 
		}).compile(); 

		controller = module.get<Parqxdetail1sController>(Parqxdetail1sController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});