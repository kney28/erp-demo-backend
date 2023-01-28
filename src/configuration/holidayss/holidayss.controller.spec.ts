import { Test, TestingModule } from '@nestjs/testing'; 
import { HolidayssController } from './holidayss.controller'; 
import { HolidayssService } from './holidayss.service'; 
describe('HolidayssController', () => { 
	let controller: HolidayssController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [HolidayssController], 
			providers: [HolidayssService], 
		}).compile(); 

		controller = module.get<HolidayssController>(HolidayssController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});