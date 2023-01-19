import { Module } from '@nestjs/common'; 
import { NumerationdiansService } from './numerationdians.service'; 
import { NumerationdiansController } from './numerationdians.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Numerationdian } from './entities/numerationdian.entity'; 
import { NumerationdianLogs } from './entities/numerationdianlogs.entity'; 
import { NumerationdianSubscriber } from './entities/numerationdian.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Numerationdian]), 
		TypeOrmModule.forFeature([NumerationdianLogs]), 
	], 
	controllers: [NumerationdiansController], 
	providers: [NumerationdiansService, NumerationdianSubscriber], 
	exports: [NumerationdiansService], 
})
export class NumerationdiansModule {}