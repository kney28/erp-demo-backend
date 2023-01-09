import { Module } from '@nestjs/common';
import { EntityTemplatesService } from './entityTemplates.service';
import { EntityTemplatesController } from './entityTemplates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityTemplate } from './entities/entityTemplate.entity';
import { EntityTemplateLogs } from './entities/entityTemplateLogs.entity';
import { EntityTemplateSubscriber } from './entities/entityTemplate.subscriber';

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
