import { Test, TestingModule } from '@nestjs/testing'; 
import { HcadvereventclasssService } from './hcadvereventclasss.service'; 

describe('HcadvereventclasssService', () => { 
	let service: HcadvereventclasssService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [HcadvereventclasssService], 
		}).compile(); 

		service = module.get<HcadvereventclasssService>(HcadvereventclasssService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});