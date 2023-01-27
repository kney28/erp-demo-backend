import { Test, TestingModule } from '@nestjs/testing'; 
import { HolidayssService } from './holidayss.service'; 

describe('HolidayssService', () => { 
	let service: HolidayssService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [HolidayssService], 
		}).compile(); 

		service = module.get<HolidayssService>(HolidayssService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});