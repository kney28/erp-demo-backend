import { Test, TestingModule } from '@nestjs/testing'; 
import { HcvadsispromipressService } from './hcvadsispromipress.service'; 

describe('HcvadsispromipressService', () => { 
	let service: HcvadsispromipressService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [HcvadsispromipressService], 
		}).compile(); 

		service = module.get<HcvadsispromipressService>(HcvadsispromipressService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});