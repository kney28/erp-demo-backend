import { Module } from '@nestjs/common'; 
import { InvunitsmeasService } from './invunitsmeas.service'; 
import { InvunitsmeasController } from './invunitsmeas.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Invunitsmea } from './entities/invunitsmea.entity'; 
import { InvunitsmeaLogs } from './entities/invunitsmealogs.entity'; 
import { InvunitsmeaSubscriber } from './entities/invunitsmea.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Invunitsmea]), 
		TypeOrmModule.forFeature([InvunitsmeaLogs]), 
	], 
	controllers: [InvunitsmeasController], 
	providers: [InvunitsmeasService, InvunitsmeaSubscriber], 
	exports: [InvunitsmeasService], 
})
export class InvunitsmeasModule {}