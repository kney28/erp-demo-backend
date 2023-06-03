import { Module } from '@nestjs/common'; 
import { Parqxdetail3sService } from './parqxdetail3s.service'; 
import { Parqxdetail3sController } from './parqxdetail3s.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Parqxdetail3 } from './entities/parqxdetail3.entity'; 
import { Parqxdetail3Logs } from './entities/parqxdetail3logs.entity'; 
import { Parqxdetail3Subscriber } from './entities/parqxdetail3.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Parqxdetail3]), 
		TypeOrmModule.forFeature([Parqxdetail3Logs]), 
	], 
	controllers: [Parqxdetail3sController], 
	providers: [Parqxdetail3sService, Parqxdetail3Subscriber], 
	exports: [Parqxdetail3sService], 
})
export class Parqxdetail3sModule {}