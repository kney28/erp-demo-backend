import { Module } from '@nestjs/common'; 
import { ConsecutivosinvigenciasService } from './consecutivosinvigencias.service'; 
import { ConsecutivosinvigenciasController } from './consecutivosinvigencias.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Consecutivosinvigencia } from './entities/consecutivosinvigencia.entity'; 
import { ConsecutivosinvigenciaLogs } from './entities/consecutivosinvigencialogs.entity'; 
import { ConsecutivosinvigenciaSubscriber } from './entities/consecutivosinvigencia.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Consecutivosinvigencia]), 
		TypeOrmModule.forFeature([ConsecutivosinvigenciaLogs]), 
	], 
	controllers: [ConsecutivosinvigenciasController], 
	providers: [ConsecutivosinvigenciasService, ConsecutivosinvigenciaSubscriber], 
	exports: [ConsecutivosinvigenciasService], 
})
export class ConsecutivosinvigenciasModule {}