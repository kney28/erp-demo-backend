import { Test, TestingModule } from '@nestjs/testing'; 
import { Parqxdetail2sController } from './parqxdetail2s.controller'; 
import { Parqxdetail2sService } from './parqxdetail2s.service'; 
describe('Parqxdetail2sController', () => { 
	let controller: Parqxdetail2sController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [Parqxdetail2sController], 
			providers: [Parqxdetail2sService], 
		}).compile(); 

		controller = module.get<Parqxdetail2sController>(Parqxdetail2sController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});