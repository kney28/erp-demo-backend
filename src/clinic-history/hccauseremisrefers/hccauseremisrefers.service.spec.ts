import { Test, TestingModule } from '@nestjs/testing'; 
import { HccauseremisrefersService } from './hccauseremisrefers.service'; 

describe('HccauseremisrefersService', () => { 
	let service: HccauseremisrefersService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [HccauseremisrefersService], 
		}).compile(); 

		service = module.get<HccauseremisrefersService>(HccauseremisrefersService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});