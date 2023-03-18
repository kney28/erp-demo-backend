import { Test, TestingModule } from '@nestjs/testing'; 
import { InvmanufrolessService } from './invmanufroless.service'; 

describe('InvmanufrolessService', () => { 
	let service: InvmanufrolessService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [InvmanufrolessService], 
		}).compile(); 

		service = module.get<InvmanufrolessService>(InvmanufrolessService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});