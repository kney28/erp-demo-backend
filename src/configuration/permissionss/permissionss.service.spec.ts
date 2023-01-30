import { Test, TestingModule } from '@nestjs/testing'; 
import { PermissionssService } from './permissionss.service'; 

describe('PermissionssService', () => { 
	let service: PermissionssService; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			providers: [PermissionssService], 
		}).compile(); 

		service = module.get<PermissionssService>(PermissionssService); 
	}); 

	it('should be defined', () => { 
		expect(service).toBeDefined(); 
	}); 
});