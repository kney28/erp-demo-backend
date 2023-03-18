import { Module } from '@nestjs/common'; 
import { InvmanufrolessService } from './invmanufroless.service'; 
import { InvmanufrolessController } from './invmanufroless.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Invmanufroles } from './entities/invmanufroles.entity'; 
import { InvmanufrolesLogs } from './entities/invmanufroleslogs.entity'; 
import { InvmanufrolesSubscriber } from './entities/invmanufroles.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Invmanufroles]), 
		TypeOrmModule.forFeature([InvmanufrolesLogs]), 
	], 
	controllers: [InvmanufrolessController], 
	providers: [InvmanufrolessService, InvmanufrolesSubscriber], 
	exports: [InvmanufrolessService], 
})
export class InvmanufrolessModule {}