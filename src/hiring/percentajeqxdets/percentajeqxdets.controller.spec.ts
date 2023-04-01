import { Test, TestingModule } from '@nestjs/testing'; 
import { PercentajeqxdetsController } from './percentajeqxdets.controller'; 
import { PercentajeqxdetsService } from './percentajeqxdets.service'; 
describe('PercentajeqxdetsController', () => { 
	let controller: PercentajeqxdetsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [PercentajeqxdetsController], 
			providers: [PercentajeqxdetsService], 
		}).compile(); 

		controller = module.get<PercentajeqxdetsController>(PercentajeqxdetsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});