import { Test, TestingModule } from '@nestjs/testing'; 
import { HcadvereventclasssController } from './hcadvereventclasss.controller'; 
import { HcadvereventclasssService } from './hcadvereventclasss.service'; 
describe('HcadvereventclasssController', () => { 
	let controller: HcadvereventclasssController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [HcadvereventclasssController], 
			providers: [HcadvereventclasssService], 
		}).compile(); 

		controller = module.get<HcadvereventclasssController>(HcadvereventclasssController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});