import { Module } from '@nestjs/common'; 
import { EntitytemplatesService } from './entitytemplates.service'; 
import { EntitytemplatesController } from './entitytemplates.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Entitytemplate } from './entities/entitytemplate.entity'; 
import { EntitytemplateLogs } from './entities/entitytemplatelogs.entity'; 
import { EntitytemplateSubscriber } from './entities/entitytemplate.subscriber'; 

@Module({ 
	imports: [ 
		TypeOrmModule.forFeature([Entitytemplate]), 
		TypeOrmModule.forFeature([EntitytemplateLogs]), 
	], 
	controllers: [EntitytemplatesController], 
	providers: [EntitytemplatesService, EntitytemplateSubscriber], 
	exports: [EntitytemplatesService], 
})
export class EntitytemplatesModule {}