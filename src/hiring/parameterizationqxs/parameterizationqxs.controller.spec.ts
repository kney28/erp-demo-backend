import { Test, TestingModule } from '@nestjs/testing'; 
import { ParameterizationqxsController } from './parameterizationqxs.controller'; 
import { ParameterizationqxsService } from './parameterizationqxs.service'; 
describe('ParameterizationqxsController', () => { 
	let controller: ParameterizationqxsController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [ParameterizationqxsController], 
			providers: [ParameterizationqxsService], 
		}).compile(); 

		controller = module.get<ParameterizationqxsController>(ParameterizationqxsController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});