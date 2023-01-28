import { Module } from '@nestjs/common'; 
import { ChargesService } from './charges.service'; 
import { ChargesController } from './charges.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Charge } from './entities/charge.entity'; 
import { ChargeLogs } from './entities/chargelogs.entity'; 
import { ChargeSubscriber } from './entities/charge.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Charge]), 
		TypeOrmModule.forFeature([ChargeLogs]), 
	], 
	controllers: [ChargesController], 
	providers: [ChargesService, ChargeSubscriber], 
	exports: [ChargesService], 
})
export class ChargesModule {}