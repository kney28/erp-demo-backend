import { Test, TestingModule } from '@nestjs/testing'; 
import { DetailnumerationdiansController } from './detailnumerationdians.controller'; 
import { DetailnumerationdiansService } from './detailnumerationdians.service'; 
describe('DetailnumerationdiansController', () => { 
	let controller: DetailnumerationdiansController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [DetailnumerationdiansController], 
			providers: [DetailnumerationdiansService], 
		}).compile(); 

		controller = module.get<DetailnumerationdiansController>(DetailnumerationdiansController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});