import { Module } from '@nestjs/common'; 
import { InvaccparsService } from './invaccpars.service'; 
import { InvaccparsController } from './invaccpars.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Invaccpar } from './entities/invaccpar.entity'; 
import { InvaccparLogs } from './entities/invaccparlogs.entity'; 
import { InvaccparSubscriber } from './entities/invaccpar.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Invaccpar]), 
		TypeOrmModule.forFeature([InvaccparLogs]), 
	], 
	controllers: [InvaccparsController], 
	providers: [InvaccparsService, InvaccparSubscriber], 
	exports: [InvaccparsService], 
})
export class InvaccparsModule {}