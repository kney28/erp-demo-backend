import { Module } from '@nestjs/common'; 
import { AppofficessService } from './appofficess.service'; 
import { AppofficessController } from './appofficess.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Appoffices } from './entities/appoffices.entity'; 
import { AppofficesLogs } from './entities/appofficeslogs.entity'; 
import { AppofficesSubscriber } from './entities/appoffices.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Appoffices]), 
		TypeOrmModule.forFeature([AppofficesLogs]), 
	], 
	controllers: [AppofficessController], 
	providers: [AppofficessService, AppofficesSubscriber], 
	exports: [AppofficessService], 
})
export class AppofficessModule {}