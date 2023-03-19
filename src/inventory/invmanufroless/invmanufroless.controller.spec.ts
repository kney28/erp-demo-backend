import { Test, TestingModule } from '@nestjs/testing'; 
import { InvmanufrolessController } from './invmanufroless.controller'; 
import { InvmanufrolessService } from './invmanufroless.service'; 
describe('InvmanufrolessController', () => { 
	let controller: InvmanufrolessController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [InvmanufrolessController], 
			providers: [InvmanufrolessService], 
		}).compile(); 

		controller = module.get<InvmanufrolessController>(InvmanufrolessController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});