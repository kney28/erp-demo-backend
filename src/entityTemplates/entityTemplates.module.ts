import { Module } from '@nestjs/common';
import { EntityTemplatesService } from './entitytemplates.service';
import { EntityTemplatesController } from './entitytemplates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityTemplate } from './entities/entitytemplate.entity';
import { EntityTemplateLogs } from './entities/entitytemplateLogs.entity';
import { EntityTemplateSubscriber } from './entities/entitytemplate.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([EntityTemplate]),
    TypeOrmModule.forFeature([EntityTemplateLogs]),
  ],
  controllers: [EntityTemplatesController],
  providers: [EntityTemplatesService, EntityTemplateSubscriber],
  exports: [EntityTemplatesService],
})
export class EntityTemplatesModule {}
