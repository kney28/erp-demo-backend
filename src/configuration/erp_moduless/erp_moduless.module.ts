import { Module } from '@nestjs/common'; 
import { Erp_modulessService } from './erp_moduless.service'; 
import { Erp_modulessController } from './erp_moduless.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Erp_modules } from './entities/erp_modules.entity'; 
import { Profile } from 'src/configuration/profiles/entities/profile.entity';
import { Permissions } from 'src/configuration/permissionss/entities/permissions.entity';
import { Erp_modulesLogs } from './entities/erp_moduleslogs.entity'; 
import { Erp_modulesSubscriber } from './entities/erp_modules.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Erp_modules]), 
		TypeOrmModule.forFeature([Erp_modulesLogs]),
		TypeOrmModule.forFeature([Profile]),
		TypeOrmModule.forFeature([Permissions]), 
	], 
	controllers: [Erp_modulessController], 
	providers: [Erp_modulessService, Erp_modulesSubscriber], 
	exports: [Erp_modulessService], 
})
export class Erp_modulessModule {}