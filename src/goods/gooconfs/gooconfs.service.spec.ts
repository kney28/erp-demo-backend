import { Test, TestingModule } from '@nestjs/testing'; 
import { GooconfsService } from './gooconfs.service'; 

describe('GooconfsService', () => { 
	let service: GooconfsService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [GooconfsService], 
		}).compile(); 

		service = module.get<GooconfsService>(GooconfsService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});