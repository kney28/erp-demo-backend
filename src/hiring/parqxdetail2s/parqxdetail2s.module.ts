import { Module } from '@nestjs/common'; 
import { Parqxdetail2sService } from './parqxdetail2s.service'; 
import { Parqxdetail2sController } from './parqxdetail2s.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Parqxdetail2 } from './entities/parqxdetail2.entity'; 
import { Parqxdetail2Logs } from './entities/parqxdetail2logs.entity'; 
import { Parqxdetail2Subscriber } from './entities/parqxdetail2.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Parqxdetail2]), 
		TypeOrmModule.forFeature([Parqxdetail2Logs]), 
	], 
	controllers: [Parqxdetail2sController], 
	providers: [Parqxdetail2sService, Parqxdetail2Subscriber], 
	exports: [Parqxdetail2sService], 
})
export class Parqxdetail2sModule {}