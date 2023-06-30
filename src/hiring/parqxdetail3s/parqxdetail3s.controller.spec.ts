import { Test, TestingModule } from '@nestjs/testing'; 
import { Parqxdetail3sController } from './parqxdetail3s.controller'; 
import { Parqxdetail3sService } from './parqxdetail3s.service'; 
describe('Parqxdetail3sController', () => { 
	let controller: Parqxdetail3sController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [Parqxdetail3sController], 
			providers: [Parqxdetail3sService], 
		}).compile(); 

		controller = module.get<Parqxdetail3sController>(Parqxdetail3sController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});