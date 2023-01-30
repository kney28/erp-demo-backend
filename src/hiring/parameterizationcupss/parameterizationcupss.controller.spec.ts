import { Test, TestingModule } from '@nestjs/testing'; 
import { ParameterizationcupssController } from './parameterizationcupss.controller'; 
import { ParameterizationcupssService } from './parameterizationcupss.service'; 
describe('ParameterizationcupssController', () => { 
	let controller: ParameterizationcupssController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [ParameterizationcupssController], 
			providers: [ParameterizationcupssService], 
		}).compile(); 

		controller = module.get<ParameterizationcupssController>(ParameterizationcupssController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});