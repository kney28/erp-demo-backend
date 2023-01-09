import { Module } from '@nestjs/common';
import { RequirementsListsService } from './requirements-lists.service';
import { RequirementsListsController } from './requirements-lists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequirementsList } from './entities/requirements-list.entity';
import { RequirementsListLogs } from './entities/requirements-listlogs.entity';
import { RequirementsListSubscriber } from './entities/requirements-list.subscriber';
import { RequirementsListExistConstraint } from './validations/requirements-lists.validate.unique';

@Module({
  imports: [
    TypeOrmModule.forFeature([RequirementsList]),
    TypeOrmModule.forFeature([RequirementsListLogs]),
  ],
  controllers: [RequirementsListsController],
  providers: [
    RequirementsListsService,
    RequirementsListSubscriber,
    RequirementsListExistConstraint,
  ],
  exports: [RequirementsListsService],
})
export class RequirementsListsModule {}
