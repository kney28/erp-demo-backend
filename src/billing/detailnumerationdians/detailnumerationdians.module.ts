import { Module } from '@nestjs/common'; 
import { DetailnumerationdiansService } from './detailnumerationdians.service'; 
import { DetailnumerationdiansController } from './detailnumerationdians.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Detailnumerationdian } from './entities/detailnumerationdian.entity'; 
import { DetailnumerationdianLogs } from './entities/detailnumerationdianlogs.entity'; 
import { DetailnumerationdianSubscriber } from './entities/detailnumerationdian.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Detailnumerationdian]), 
		TypeOrmModule.forFeature([DetailnumerationdianLogs]), 
	], 
	controllers: [DetailnumerationdiansController], 
	providers: [DetailnumerationdiansService, DetailnumerationdianSubscriber], 
	exports: [DetailnumerationdiansService], 
})
export class DetailnumerationdiansModule {}