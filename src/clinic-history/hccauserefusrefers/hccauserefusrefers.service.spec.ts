import { Test, TestingModule } from '@nestjs/testing'; 
import { HccauserefusrefersService } from './hccauserefusrefers.service'; 

describe('HccauserefusrefersService', () => { 
	let service: HccauserefusrefersService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [HccauserefusrefersService], 
		}).compile(); 

		service = module.get<HccauserefusrefersService>(HccauserefusrefersService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});