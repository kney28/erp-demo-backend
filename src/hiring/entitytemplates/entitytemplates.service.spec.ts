import { Test, TestingModule } from '@nestjs/testing'; 
import { EntitytemplatesService } from './entitytemplates.service'; 

describe('EntitytemplatesService', () => { 
	let service: EntitytemplatesService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [EntitytemplatesService], 
		}).compile(); 

		service = module.get<EntitytemplatesService>(EntitytemplatesService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});