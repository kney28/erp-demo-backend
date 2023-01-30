import { Test, TestingModule } from '@nestjs/testing'; 
import { EntitytemplatesController } from './entitytemplates.controller'; 
import { EntitytemplatesService } from './entitytemplates.service'; 
describe('EntitytemplatesController', () => { 
	let controller: EntitytemplatesController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [EntitytemplatesController], 
			providers: [EntitytemplatesService], 
		}).compile(); 

		controller = module.get<EntitytemplatesController>(EntitytemplatesController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});