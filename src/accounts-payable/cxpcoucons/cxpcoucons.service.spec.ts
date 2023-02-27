import { Test, TestingModule } from '@nestjs/testing'; 
import { CxpcouconsService } from './cxpcoucons.service'; 

describe('CxpcouconsService', () => { 
	let service: CxpcouconsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [CxpcouconsService], 
		}).compile(); 

		service = module.get<CxpcouconsService>(CxpcouconsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});