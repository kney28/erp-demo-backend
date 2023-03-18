import { Module } from '@nestjs/common'; 
import { AccentsubdetsService } from './accentsubdets.service'; 
import { AccentsubdetsController } from './accentsubdets.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Accentsubdet } from './entities/accentsubdet.entity'; 
import { AccentsubdetLogs } from './entities/accentsubdetlogs.entity'; 
import { AccentsubdetSubscriber } from './entities/accentsubdet.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Accentsubdet]), 
		TypeOrmModule.forFeature([AccentsubdetLogs]), 
	], 
	controllers: [AccentsubdetsController], 
	providers: [AccentsubdetsService, AccentsubdetSubscriber], 
	exports: [AccentsubdetsService], 
})
export class AccentsubdetsModule {}