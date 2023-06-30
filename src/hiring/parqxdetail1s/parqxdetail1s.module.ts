import { Module } from '@nestjs/common'; 
import { Parqxdetail1sService } from './parqxdetail1s.service'; 
import { Parqxdetail1sController } from './parqxdetail1s.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Parqxdetail1 } from './entities/parqxdetail1.entity'; 
import { Parqxdetail1Logs } from './entities/parqxdetail1logs.entity'; 
import { Parqxdetail1Subscriber } from './entities/parqxdetail1.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Parqxdetail1]), 
		TypeOrmModule.forFeature([Parqxdetail1Logs]), 
	], 
	controllers: [Parqxdetail1sController], 
	providers: [Parqxdetail1sService, Parqxdetail1Subscriber], 
	exports: [Parqxdetail1sService], 
})
export class Parqxdetail1sModule {}