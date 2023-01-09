import { Module } from '@nestjs/common';
import { RequirementsListsDetailsService } from './requirements-lists-details.service';
import { RequirementsListsDetailsController } from './requirements-lists-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequirementsListDetail } from './entities/requirements-lists-detail.entity';
import { RequirementsListDetailLogs } from './entities/requirements-list-detaillogs.entity';
import { RequirementsListDetailSubscriber } from './entities/requirements-list-detail.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([RequirementsListDetail]),
    TypeOrmModule.forFeature([RequirementsListDetailLogs]),
  ],
  controllers: [RequirementsListsDetailsController],
  providers: [
    RequirementsListsDetailsService,
    RequirementsListDetailSubscriber,
  ],
})
export class RequirementsListsDetailsModule {}
