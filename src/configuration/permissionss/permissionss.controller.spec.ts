import { Test, TestingModule } from '@nestjs/testing'; 
import { PermissionssController } from './permissionss.controller'; 
import { PermissionssService } from './permissionss.service'; 
describe('PermissionssController', () => { 
	let controller: PermissionssController; 

	beforeEach(async () => { 
		const module: TestingModule = await Test.createTestingModule({ 
			controllers: [PermissionssController], 
			providers: [PermissionssService], 
		}).compile(); 

		controller = module.get<PermissionssController>(PermissionssController); 
	}); 

	it('should be defined', () => { 
		expect(controller).toBeDefined(); 
	}); 
});