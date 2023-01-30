import { Module } from '@nestjs/common'; 
import { PermissionssService } from './permissionss.service'; 
import { PermissionssController } from './permissionss.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Permissions } from './entities/permissions.entity'; 
import { PermissionsLogs } from './entities/permissionslogs.entity'; 
import { PermissionsSubscriber } from './entities/permissions.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Permissions]), 
		TypeOrmModule.forFeature([PermissionsLogs]), 
	], 
	controllers: [PermissionssController], 
	providers: [PermissionssService, PermissionsSubscriber], 
	exports: [PermissionssService], 
})
export class PermissionssModule {}