import { Module } from '@nestjs/common'; 
import { ModeratingcopaysdetsService } from './moderatingcopaysdets.service'; 
import { ModeratingcopaysdetsController } from './moderatingcopaysdets.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Moderatingcopaysdet } from './entities/moderatingcopaysdet.entity'; 
import { ModeratingcopaysdetLogs } from './entities/moderatingcopaysdetlogs.entity'; 
import { ModeratingcopaysdetSubscriber } from './entities/moderatingcopaysdet.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Moderatingcopaysdet]), 
		TypeOrmModule.forFeature([ModeratingcopaysdetLogs]), 
	], 
	controllers: [ModeratingcopaysdetsController], 
	providers: [ModeratingcopaysdetsService, ModeratingcopaysdetSubscriber], 
	exports: [ModeratingcopaysdetsService], 
})
export class ModeratingcopaysdetsModule {}