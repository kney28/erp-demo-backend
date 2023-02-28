import { Module } from '@nestjs/common'; 
import { InvcumsService } from './invcums.service'; 
import { InvcumsController } from './invcums.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Invcum } from './entities/invcum.entity'; 
import { InvcumLogs } from './entities/invcumlogs.entity'; 
import { InvcumSubscriber } from './entities/invcum.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Invcum]), 
		TypeOrmModule.forFeature([InvcumLogs]), 
	], 
	controllers: [InvcumsController], 
	providers: [InvcumsService, InvcumSubscriber], 
	exports: [InvcumsService], 
})
export class InvcumsModule {}