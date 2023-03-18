import { Module } from '@nestjs/common'; 
import { InvpharforsService } from './invpharfors.service'; 
import { InvpharforsController } from './invpharfors.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Invpharfor } from './entities/invpharfor.entity'; 
import { InvpharforLogs } from './entities/invpharforlogs.entity'; 
import { InvpharforSubscriber } from './entities/invpharfor.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Invpharfor]), 
		TypeOrmModule.forFeature([InvpharforLogs]), 
	], 
	controllers: [InvpharforsController], 
	providers: [InvpharforsService, InvpharforSubscriber], 
	exports: [InvpharforsService], 
})
export class InvpharforsModule {}