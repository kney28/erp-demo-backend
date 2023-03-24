import { Module } from '@nestjs/common'; 
import { ModeratingcopaysService } from './moderatingcopays.service'; 
import { ModeratingcopaysController } from './moderatingcopays.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Moderatingcopay } from './entities/moderatingcopay.entity'; 
import { ModeratingcopayLogs } from './entities/moderatingcopaylogs.entity'; 
import { ModeratingcopaySubscriber } from './entities/moderatingcopay.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Moderatingcopay]), 
		TypeOrmModule.forFeature([ModeratingcopayLogs]), 
	], 
	controllers: [ModeratingcopaysController], 
	providers: [ModeratingcopaysService, ModeratingcopaySubscriber], 
	exports: [ModeratingcopaysService], 
})
export class ModeratingcopaysModule {}