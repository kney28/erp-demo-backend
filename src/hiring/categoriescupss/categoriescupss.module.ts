import { Module } from '@nestjs/common'; 
import { CategoriescupssService } from './categoriescupss.service'; 
import { CategoriescupssController } from './categoriescupss.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Categoriescups } from './entities/categoriescups.entity'; 
import { CategoriescupsLogs } from './entities/categoriescupslogs.entity'; 
import { CategoriescupsSubscriber } from './entities/categoriescups.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Categoriescups]), 
		TypeOrmModule.forFeature([CategoriescupsLogs]), 
	], 
	controllers: [CategoriescupssController], 
	providers: [CategoriescupssService, CategoriescupsSubscriber], 
	exports: [CategoriescupssService], 
})
export class CategoriescupssModule {}